import TimeLabelCard from "@/components/analytics/components/time-label-card";
import TimelineHeader from "@/components/analytics/components/timeline-header";
import TimelineItem from "@/components/analytics/components/timeline-item";
import { icons } from "@/constants";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";

const TOP_CONTAINER_HEIGHT = 355;

type AnalyticsItem = {
  id: number;
  title: string;
  value: string;
  icon: any; // Icon component type
};

const analytics: AnalyticsItem[] = [
  { id: 1, title: "VITALS", value: "92%", icon: icons.ArrowTrendUpWhite },
  { id: 2, title: "STRESS", value: "low", icon: icons.ArrowTrendDownWhite },
  { id: 3, title: "ENERGY", value: "high", icon: icons.ArrowTrendUpWhite },
];

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("journey");
  const [activeTimeFilter, setActiveTimeFilter] = useState("1m");
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const timeFilters = [
    { id: "1m", label: "1m" },
    { id: "3m", label: "3m" },
    { id: "6m", label: "6m" },
    { id: "12m", label: "12m" },
  ];

  const timelineData = [
    {
      date: "SEP 15",
      title: "New habit formed: Meditation practice",
      description: "You completed a 15-day streak",
    },
    {
      date: "OCT 01",
      title: "Consistent sleep-wake cycle established",
      description: "You completed a 30-day morning routine streak",
    },
    {
      date: "OCT 01",
      title: "Consistent sleep-wake cycle established",
      description: "You completed a 30-day morning routine streak",
    },
    {
      date: "OCT 01",
      title: "Consistent sleep-wake cycle established",
      description: "You completed a 30-day morning routine streak",
    },
  ];

  const handleTimeLabelClick = (id: string) => {
    setActiveTimeFilter(id);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Top container */}
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <icons.LeftArrow style={styles.backIcon} />
        </TouchableOpacity>

        {/* Header text context*/}
        <View style={styles.scoreHeaderContainer}>
          <View style={styles.healthScoreContainer}>
            <Text style={styles.healthScoreValue}>78</Text>
            <Text style={styles.healthScoreMax}>/100</Text>
          </View>

          <View>
            <Text style={styles.healthScoreLabel}>My Health Score</Text>
            <View style={styles.scoreImprovementContainer}>
              <icons.ArrowTrendUpWhite />
              <Text style={styles.scoreImprovementText}>
                Improving steadily
              </Text>
            </View>
          </View>
        </View>

        {/* Timeline labels */}
        <View style={styles.timeFilterContainer}>
          {timeFilters.map((filter) => (
            <TimeLabelCard
              filter={filter}
              handleTimeLabelClick={handleTimeLabelClick}
              activeTimeLabel={activeTimeFilter}
            />
          ))}
        </View>

        {/* Analytics */}
        <View style={styles.analyticsContainer}>
          {analytics.map((info, index) => (
            <View
              key={info.id}
              style={[
                styles.infoBlock,
                analytics.length - 1 === index && { borderRightWidth: 0 },
              ]}
            >
              <View style={styles.infoContentContainer}>
                <Text style={styles.infoTitle}>{info.title}</Text>
                <View style={styles.infoCardValueContainer}>
                  <Text style={styles.infoValue}>{info.value}</Text>
                  <info.icon />
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.tabContainerWrapper}>
        <View style={styles.tabContainerInsideWrapper}>
          {/* tab container header */}
          <View style={styles.tabContainerHeader}>
            <View style={styles.tabButtonContainer}>
              <TouchableOpacity
                style={[
                  styles.tabButton,
                  activeTab === "overview" && styles.activeTabButton,
                ]}
                onPress={() => setActiveTab("overview")}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "overview" && styles.activeTabText,
                  ]}
                >
                  overview
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.tabButton,
                  activeTab === "journey" && styles.activeTabButton,
                ]}
                onPress={() => setActiveTab("journey")}
              >
                <Text
                  style={[
                    styles.tabText,
                    activeTab === "journey" && styles.activeTabText,
                  ]}
                >
                  Journey
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* tab container Footer (not footer but headr) */}
          <TimelineHeader />

          {/* tab container footer */}
          {activeTab === "journey" && (
            <View style={styles.timelineContainer}>
              {timelineData.map((item, index) => (
                <TimelineItem
                  key={index}
                  date={item.date}
                  title={item.title}
                  description={item.description}
                  isLastItem={index === timelineData.length - 1}
                />
              ))}
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  topContainer: {
    backgroundColor: "#1DAD73",
    height: TOP_CONTAINER_HEIGHT,
  },
  //
  // Back Icon
  backButton: {
    marginTop:
      Platform.OS === "android" ? (StatusBar.currentHeight || 44) + 17 : 17,
    marginLeft: 15,
    zIndex: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: Colors.black,
  },
  //

  // header
  scoreHeaderContainer: {
    marginLeft: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 1,
    zIndex: 99,
  },
  healthScoreContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  healthScoreValue: {
    color: "rgba(245, 245, 245, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 48,
    lineHeight: 59.42,
  },
  healthScoreMax: {
    color: "rgba(245, 245, 245, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 35.42,
  },
  //
  healthScoreLabel: {
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.81,
    letterSpacing: 0.03,
  },
  // Icon container
  scoreImprovementContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  scoreImprovementText: {
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Gilroy-Medium",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16,
  },
  //

  // Time line COntainer
  timeFilterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: "auto",
    marginBottom: 12,
  },
  //

  // Analytics
  analyticsContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    paddingVertical: 3,
  },
  infoBlock: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 3,
  },
  infoContentContainer: {
    alignItems: "flex-start",
  },
  infoTitle: {
    color: "rgba(255, 255, 255, 0.6)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 11.12,
    lineHeight: 13.62,
  },
  infoCardValueContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  infoValue: {
    color: Colors.white,
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24.76,
  },
  //

  // screen body
  tabContainerWrapper: {
    padding: 16,
    paddingBottom: 132,
  },
  tabContainerInsideWrapper: {
    borderWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 12,
  },

  // tab container
  tabContainerHeader: {
    paddingVertical: 16,
    justifyContent: "center",
  },
  tabButtonContainer: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    flexDirection: "row",
    gap: 16,
    marginHorizontal: "auto",
    borderRadius: 25,
    overflow: "hidden",
  },
  tabButton: {
    alignItems: "center",
    paddingVertical: 9.5,
    paddingHorizontal: 16,
  },
  tabText: {
    color: "rgba(242, 243, 239, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.33,
  },
  activeTabButton: {
    backgroundColor: "rgba(238, 238, 238, 1)",
  },
  activeTabText: {
    color: "rgba(0, 0, 0, 1)",
  },
  //

  // footer

  // body
  timelineContainer: {
    paddingVertical: 17,
  },
});
