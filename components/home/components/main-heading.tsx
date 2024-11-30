import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
const HEADER_HEIGHT = 49;

const MainHeading = () => {
  return (
    <View style={styles.mainContent}>
      <Text style={styles.contentText}>Congrats, Mark</Text>
      <Text style={styles.contentSubText}>
        you’re in the top 3% of the {"\n"}population
      </Text>
    </View>
  );
};

export default MainHeading;

const styles = StyleSheet.create({
  mainContent: {
    marginLeft: 19,
    marginTop: HEADER_HEIGHT,
  },
  contentText: {
    fontFamily: "Recoleta",
    fontSize: 32,
    fontWeight: 500,
    lineHeight: 43.52,
    letterSpacing: -0.03,
    color: Colors.white,
  },
  contentSubText: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 18,
    fontWeight: 400,
    lineHeight: 22.05,
    letterSpacing: -0.03,
    color: Colors.white,
  },
});
