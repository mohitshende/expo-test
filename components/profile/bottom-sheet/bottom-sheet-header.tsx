import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { icons } from "@/constants";

const BottomSheetHeader = ({ TitleIcon, title }) => {
  return (
    <View style={styles.listItem}>
      <TitleIcon style={styles.listIcon} />
      <Text style={styles.listText}>{title}</Text>

      {/* Right Arrow Icon */}
      <icons.CloseCircle style={icons.CloseCircle} />
    </View>
  );
};

export default BottomSheetHeader;

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 8,
    borderBottomWidth: 0.4,
    borderBottomColor: Colors.border.secondary,
  },
  listIcon: {
    width: 24,
    height: 24,
    tintColor: Colors.black,
    marginRight: 12,
  },
  listText: {
    flex: 1,
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: 0.25,
    color: Colors.text.secondary,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    marginLeft: "auto",
    tintColor: Colors.black,
  },
});
