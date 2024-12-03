import { View, Text, StyleSheet } from "react-native";
import React from "react";

const TimelineHeader = () => {
  return (
    <View style={styles.tabContainerFooter}>
      <View style={styles.tabFooterBlock}>
        <Text
          style={[styles.tabFooterBlockText, styles.activeTabFooterBlockText]}
        >
          1m ago
        </Text>
      </View>
      <View style={styles.tabFooterBlock}>
        <Text style={styles.tabFooterBlockText}>1m ago</Text>
      </View>
      <View style={styles.tabFooterBlock}>
        <Text style={styles.tabFooterBlockText}>1m ago</Text>
      </View>
    </View>
  );
};

export default TimelineHeader;

const styles = StyleSheet.create({
  tabContainerFooter: {
    borderTopWidth: 0.4,
    borderBottomWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.7)",
    flexDirection: "row",
  },
  tabFooterBlock: {
    flex: 1,
    justifyContent: "center",
    borderRightWidth: 0.4,
    borderColor: "rgba(0, 0, 0, 0.7)",
    paddingVertical: 9.5,
  },
  tabFooterBlockText: {
    color: "rgba(128, 128, 128, 1)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.15,
    letterSpacing: 0.03,
    textAlign: "center",
  },
  activeTabFooterBlockText: {
    color: "rgba(0, 0, 0, 1)",
  },
  //
});
