import { View, Text, StyleSheet, Platform } from "react-native";
import React from "react";
import { icons } from "@/constants";
import { Colors } from "@/constants/Colors";

const CARD_WIDTH = 312;

const activities = [
  { id: 1, time: "7:00am", icon: <icons.SunOutlined />, title: "Sunlight" },
  { id: 2, time: "7:00am", icon: <icons.Dumbel />, title: "Exercise" },
  { id: 3, time: "7:00am", icon: <icons.SunOutlined />, title: "Breakfast" },
];

const metrics = [
  { id: 1, title: "ENERGY", value: "+32" },
  { id: 2, title: "METABOLISM", value: "+92" },
  { id: 3, title: "MOOD", value: "+28" },
];

const HabitStacksCard = () => {
  return (
    <View style={styles.habitStackCard}>
      {/* Header */}
      <View style={styles.habitCardHeader}>
        <Text style={styles.habitHeading}>Morning optimizer</Text>

        <View style={styles.habitSubHeadingContainer}>
          <icons.Clock />
          <Text style={styles.habitSubHeading}>15 day streak</Text>
        </View>
      </View>

      {/* Body */}
      <View style={styles.scheduleContainer}>
        {activities.map((activity) => (
          <View style={styles.activityContainer} key={activity.id}>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{activity.time}</Text>
            </View>

            {activity.icon}

            <Text style={styles.activityText}>{activity.title}</Text>
          </View>
        ))}
      </View>

      {/* Footer */}
      <View style={styles.habitFooter}>
        <View style={styles.predictedImpactContainer}>
          <Text style={styles.impactTitle}>predicted impact</Text>
        </View>

        <View style={styles.metricsContainer}>
          {metrics.map((metric) => (
            <View style={styles.metricItem} key={metric.id}>
              <Text style={styles.metricTitle}>{metric.title}</Text>
              <Text style={styles.metricValue}>{metric.value}%</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default HabitStacksCard;

const styles = StyleSheet.create({
  habitStackCard: {
    width: CARD_WIDTH,
    backgroundColor: Colors.white,
    borderRadius: 11.5,

    // shadow
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 4, height: 0 }, 
        shadowOpacity: 0.45, 
        shadowRadius: 15, 
      },
      android: {
        elevation: 15, 
      },
    }),
  },
  // header
  habitCardHeader: {
    padding: 19.02,
    paddingBottom: 0,
    marginBottom: 4.42,
  },
  // heading
  habitHeading: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24.76,
  },
  // sub heading cont
  habitSubHeadingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3.8,
  },
  habitSubHeading: {
    color: "rgba(0, 0, 0, 0.5)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.12,
  },
  //
  //
  scheduleContainer: {
    backgroundColor: "rgba(67, 92, 191, 1)", // #435CBF
    paddingTop: 12,
    paddingBottom: 8.17,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    // marginVertical: 8,
  },
  activityContainer: {
    alignItems: "center",
  },
  // time
  timeContainer: {
    backgroundColor: "rgba(82, 105, 196, 1)",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
    marginBottom: 4,
  },
  timeText: {
    color: "rgba(201, 208, 235, 1)", //#C9D0EB
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 13.32,
    lineHeight: 17.12,
  },
  activityText: {
    color: "rgba(255, 255, 255, 1)", //#FFFFFF
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 13.32,
    lineHeight: 17.12,
    marginTop: 3,
  },
  //
  // footer
  habitFooter: {
    paddingTop: 8,
  },
  predictedImpactContainer: {
    backgroundColor: "rgba(67, 92, 191, 0.11)",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    marginLeft: 20,
    width: 137,
  },
  impactTitle: {
    color: "rgba(0, 0, 0, 0.7)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.15,
  },
  //
  //
  metricsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  metricItem: {
    flex: 1,
    alignItems: "center",
  },

  borderLeft: {
    borderLeftWidth: 0.5,
    borderLeftColor: "rgba(0, 0, 0, 0.1)",
  },

  metricTitle: {
    color: "rgba(0, 0, 0, 0.6)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 11.12,
    lineHeight: 13.62,
    marginBottom: 2,
  },
  metricValue: {
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24.76,
    letterSpacing: -0.03,
  },
});
