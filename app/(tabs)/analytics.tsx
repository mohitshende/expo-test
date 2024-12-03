import TabButton from "@/components/analytics/components/tab-button";
import TimeLabelCard from "@/components/analytics/components/time-label-card";
import TimelineHeader from "@/components/analytics/components/timeline-header";
import TimelineItem from "@/components/analytics/components/timeline-item";
import { icons } from "@/constants";
import { Colors } from "@/constants/Colors";
import { analytics, timeFilters, timelineData } from "@/constants/data";
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

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("journey");
  const [activeTimeFilter, setActiveTimeFilter] = useState("1m");
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleTimeLabelClick = (id: string) => {
    setActiveTimeFilter(id);
  };

  const handleTabButton = (title: string) => {
    setActiveTab(title);
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
          <View style={styles.tabContainer}>
            <View style={styles.tabWrapper}>
              <TabButton
                title="overview"
                handleTabButton={handleTabButton}
                activeTab={activeTab}
              />

              {/* Vertical Line */}
              <View style={styles.verticalLine} />

              <TabButton
                title="journey"
                handleTabButton={handleTabButton}
                activeTab={activeTab}
              />
            </View>
          </View>

          {/* tab container Footer (not footer but headr) */}
          <TimelineHeader activeTimeFilter={activeTimeFilter} />

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
    letterSpacing: -0.03,
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
  tabContainer: {
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tabWrapper: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    flexDirection: "row",
    gap: 8,
    alignSelf: "center",
    borderRadius: 25,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#000",
    width: "65%",
  },

  // vertical line
  verticalLine: {
    width: 0.5,
    backgroundColor: "rgba(238, 238, 238, 0.4)",
    height: "auto",
    marginVertical: 10,
  },
  //

  // footer

  // body
  timelineContainer: {
    paddingVertical: 17,
  },
});
