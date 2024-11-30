import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import React from "react";
import { images } from "@/constants";
import { Colors } from "@/constants/Colors";

const Achievement = () => {
  return (
    <View style={styles.achievementContainer}>
      <ImageBackground
        source={images.AchievementbgPrint}
        style={styles.achievementImgContainer}
        imageStyle={styles.backgroundImage}
      >
        <Text style={styles.achievementHeading}>Todays{"\n"}achievement</Text>

        <Text style={styles.achievementInformation}>
          Based on your sleep and activity patterns, youre likely to have{" "}
          <Text style={styles.achievementInformationInsideText}>
            10% more energy today.
          </Text>
        </Text>

        {/* footer */}
        <View style={styles.imageContainer}>
          {/* <images.girlSleeping /> */}
          <Image source={images.girlSleeping} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Achievement;

const styles = StyleSheet.create({
  achievementContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 26,
  },
  backgroundImage: {
    resizeMode: "cover",
    flex: 1,
  },
  achievementImgContainer: {
    padding: 16,
    paddingBottom: 0,
    borderRadius: 12,
    backgroundColor: "rgba(199, 82, 55, 1)", //#C75237
  },
  achievementHeading: {
    color: Colors.white,
    fontFamily: "Recoleta",
    fontWeight: 500,
    fontSize: 24,
    lineHeight: 32.64,
    marginBottom: 8,
  },
  //
  achievementInformation: {
    color: "rgba(255, 255, 255, 0.7)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
    marginBottom: 12,
  },
  achievementInformationInsideText: {
    color: Colors.white,
    fontFamily: "Gilroy-Bold",
  },
  //
  // footer - image container
  imageContainer: {
    overflow: "hidden",
  },
});
