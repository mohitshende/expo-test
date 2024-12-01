import { View, Text, StyleSheet } from "react-native";
import React from "react";
import CustomButton from "@/components/custom-button";
import { Colors } from "@/constants/Colors";
import { icons } from "@/constants";

const moreInfos = [
  { id: 1, title: "VITALS", value: "92", icon: icons.ArrowTrendUp },
  { id: 2, title: "STRESS", value: "low", icon: icons.ArrowTrendUp },
  { id: 3, title: "ENERGY", value: "high", icon: icons.ArrowTrendUp },
];

const HealthScoreCard = () => {
  return (
    <View style={styles.healthScoreCard}>
      {/* Content */}
      <View style={styles.healthScore}>
        {/* Score */}
        <Text style={styles.titleNumber}>78</Text>

        <View >
          <Text style={styles.subTitleText}>My Health Score</Text>

          <View style={styles.improveSteadilyContainer}>
            <icons.ArrowTrendUp style={styles.growthIcon} />
            <Text style={styles.improveSteadilyText}>improving steadily</Text>
          </View>
        </View>
      </View>

      <View style={styles.healthScoreMoreInfo}>
        {moreInfos.map((info) => (
          <View style={styles.infoCard} key={info.id}>
            <Text style={styles.infoTitle}>{info.title}</Text>
            <View style={styles.infoCardValue}>
              <Text style={styles.infoValue}>{info.value}</Text>
              <icons.ArrowTrendUp />
            </View>
          </View>
        ))}
      </View>

      <CustomButton
        title="see analytics"
        handlePress={() => {}}
        containerStyles={{ marginHorizontal: 12 }}
      />
    </View>
  );
};

export default HealthScoreCard;

const styles = StyleSheet.create({
  healthScoreCard: {
    borderRadius: 12,
    marginHorizontal: 20,
    paddingBottom: 12,
    backgroundColor: "rgba(5, 150, 105, 1)",
    elevation: 6,
    marginBottom:24
  },
  healthScore: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 16,
    marginLeft: 24,
    marginBottom: 49,
  },
  titleNumber: {
    color: Colors.white,
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 48,
    lineHeight: 59.42,
    letterSpacing: -0.03,
  },

  // sub title text
  subTitleText: {
    color: Colors.white,
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19.81,
    letterSpacing: -0.03,
    marginBottom: 2,
  },

  // Imporve
  improveSteadilyContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  growthIcon: {
    color: "#fff",
    tintColor: "#fff",
  },
  improveSteadilyText: {
    color: Colors.white,
    fontFamily: "Gilroy-Medium",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 16,
  },

  // More Info
  healthScoreMoreInfo: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    flexDirection: "row",
    marginBottom: 8,
  },
  infoCard: {
    flex: 1,
    justifyContent: "center",
    borderRightWidth: 0.5,
    borderColor: "rgba(255, 255, 255, 0.2)",
    paddingVertical: 3,
  },
  infoTitle: {
    color: "rgba(255, 255, 255, 0.6)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 11.12,
    lineHeight: 13.62,
    marginBottom: 2,
  },
  infoCardValue: {
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
});
