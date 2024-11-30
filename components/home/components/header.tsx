import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { icons } from "@/constants";
import { Colors } from "@/constants/Colors";
import { STATUS_BAR_HEIGHT } from "@/constants/layout";

const HEADER_HEIGHT = 49;

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        <View style={styles.blurredBackground} />

        <View style={styles.headerLeftContent}>
          <Text style={styles.welcomeText}>WELCOME TO</Text>
          <Text style={styles.welcomeTextB}> DAY 30 </Text>
        </View>
      </View>

      <View style={styles.headerRight}>
        <icons.Bell style={styles.notificationIcon} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  // Header
  headerContainer: {
    width: "100%",
    position: "absolute",
    height: HEADER_HEIGHT,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 8,
    paddingBottom: 2,
    paddingHorizontal: 16,
  },
  // Left
  headerLeft: {
    position: "relative",
    overflow: "hidden",
    flexDirection: "row",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "rgba(255, 255, 255, 0.48)",
  },
  blurredBackground: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.48)",
    filter: "blur(14)",
    opacity: 0.48,
    transform: [{ scale: 1.1 }],
  },
  headerLeftContent: {
    flexDirection: "row",
  },
  welcomeText: {
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.7,
  },
  welcomeTextB: {
    fontFamily: "Gilroy-ExtraBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 15,
  },
  //
  //Right
  headerRight: {
    width: 39,
    height: 39,
    borderRadius: 100,
    backgroundColor: Colors.black,
    justifyContent: "center",
    alignItems: "center",
    padding: 11,
  },
  notificationIcon: {
    width: 17.4,
    tintColor: "#fff",
    resizeMode: "contain",
  },
  //
});
