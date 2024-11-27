import { Text, ActivityIndicator, Pressable, StyleSheet } from "react-native";
import React from "react";

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
    borderRadius: 40,
    borderWidth: 0.6,
    paddingHorizontal: 38.75,
    paddingVertical: 11,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
    color: "#fff",
  },
});
