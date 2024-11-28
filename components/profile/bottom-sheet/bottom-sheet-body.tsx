import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { icons } from "@/constants";

const BottomSheetBody = () => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <View style={styles.section}>
        <TouchableOpacity style={styles.listItem} activeOpacity={0.75}>
          <View style={styles.listIconContainer}>
            <icons.Bluetooth style={styles.listIcon} />
          </View>

          <View style={styles.listTextContainer}>
            <Text style={styles.listText}>Apple Watch Series 8</Text>
            <View style={styles.listTextBatteryContainer}>
              <icons.Battery style={styles.batteryIcon} />
              <Text style={styles.batteryStatusTitle}>98% battery</Text>
            </View>
          </View>

          {/* Right Arrow Icon */}
          <icons.Arrow style={icons.Arrow} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem} activeOpacity={0.75}>
          <View style={styles.listIconContainer}>
            <icons.Bluetooth style={styles.listIcon} />
          </View>

          <View style={styles.listTextContainer}>
            <Text style={styles.listText}>Apple Watch Series 8</Text>
            <View style={styles.listTextBatteryContainer}>
              <icons.Battery style={styles.batteryIcon} />
              <Text style={styles.batteryStatusTitle}>98% battery</Text>
            </View>
          </View>

          {/* Right Arrow Icon */}
          <icons.Arrow style={icons.Arrow} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.listItem} activeOpacity={0.75}>
          <View style={styles.listIconContainer}>
            <icons.Bluetooth style={styles.listIcon} />
          </View>

          <View style={styles.listTextContainer}>
            <Text style={styles.listText}>Apple Watch Series 8</Text>
            <View style={styles.listTextBatteryContainer}>
              <icons.Battery style={styles.batteryIcon} />
              <Text style={styles.batteryStatusTitle}>98% battery</Text>
            </View>
          </View>

          {/* Right Arrow Icon */}
          <icons.Arrow style={icons.Arrow} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default BottomSheetBody;

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  section: {
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: Colors.border.secondary,
    paddingVertical:12,
    paddingHorizontal: 15.3,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    // marginBottom: 8,
    borderBottomWidth: 0.4,
    borderBottomColor: Colors.border.secondary,
  },
  listIconContainer: {
    width: 24,
    height: 24,
    padding: 4.25,
    backgroundColor: "rgba(18, 165, 73, 0.2)",
    borderRadius: 100,
    alignItems: "center",
    marginRight: 16,
  },
  listIcon: {
    tintColor: Colors.black,
  },
  listTextContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 4,
  },

  // 1st row
  listText: {
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    letterSpacing: 0.25,
    color: Colors.text.third,
  },
  // 2nd row
  listTextBatteryContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
},
batteryIcon: {
    width: 16.5,
    height: 8,
    tintColor:"rgba(0, 0, 0, 0.25)"
},
batteryStatusTitle: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 11.52,
    fontWeight: 400,
    lineHeight: 15.36,
    letterSpacing: 0.47,
    color: "rgba(0, 0, 0, 0.28)",
  },

  // Arrow
  arrowIcon: {
    width: 19.2,
    height: 19.2,
    marginLeft: "auto",
    tintColor: Colors.black,
  },
});
