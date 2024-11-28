import { View, Text } from "react-native";
import React from "react";
import CustomButton from "@/components/custom-button";

const BottomSheetFooter = () => {
  return (
    <CustomButton
      title="add new device"
      handlePress={() => {}}
      containerStyles={{
        marginHorizontal: 16,
        marginBottom: 40,
      }}
    />
  );
};

export default BottomSheetFooter;
