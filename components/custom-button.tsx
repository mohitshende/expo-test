import { Text, ActivityIndicator, Pressable, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface ICustomButton {
  title: string;
  handlePress: any;
  containerStyles?: any;
  textStyles?: any;
  loaderColor?: string;
  isLoading?: boolean;
}

const CustomButton = ({
  title,
  handlePress,
  containerStyles = "",
  textStyles = "",
  loaderColor,
  isLoading,
}: ICustomButton) => {
  return (
    <Pressable
      onPress={handlePress}
      style={[styles.button, containerStyles]}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator
          animating={isLoading}
          color={loaderColor ? loaderColor : "#fff"}
          size="small"
        />
      ) : (
        <Text style={[styles.buttonText, textStyles]}>{title}</Text>
      )}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 40,
    borderWidth: 0.6,
    paddingHorizontal: 16,
    paddingVertical: 11.5,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  buttonText: {
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.33,
    color: Colors.white,
  },
});
