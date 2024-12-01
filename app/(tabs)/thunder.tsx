import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { icons } from "@/constants";
import CustomButton from "@/components/custom-button";
import HealthScoreCard from "@/components/thunder/components/health-score-card";
import PersonalisedInsights from "@/components/thunder/components/personalised-insights";

const Thunder = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <HealthScoreCard />

        <PersonalisedInsights />
      </ScrollView>
    </View>
  );
};

export default Thunder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    marginBottom: 38,
  },
});
