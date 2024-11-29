import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const BottomSheetBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      <View>
        <View style={styles.section}>{children}</View>
      </View>
    </ScrollView>
  );
};

export default BottomSheetBody;

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
    paddingBottom: 40,
  },
  section: {
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: Colors.border.secondary,
    paddingVertical: 12,
    paddingHorizontal: 15.3,
  },
});
