import { View, StyleSheet, Animated, StatusBar, Image } from "react-native";
import React, { useRef } from "react";
import Header from "@/components/home/components/header";
import MainHeading from "@/components/home/components/main-heading";
import UpcomingTasks from "@/components/home/components/upcoming-tasks";
import Insight from "@/components/home/components/Insight";
import Achievement from "@/components/home/components/achievement";
import CircularProgress from "@/components/home/components/circular-progress";
import { SCREEN_WIDTH, STATUS_BAR_HEIGHT } from "@/constants/layout";
import { Colors } from "@/constants/Colors";
import { icons, images } from "@/constants";

const MAIN_BACKGROUND_HEIGHT = 345;
const HEADER_HEIGHT = 49;
const CIRCULAR_PROGRESS_SIZE = 174;

const Home = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="dark-content" />

      <Animated.ScrollView
        contentContainerStyle={styles.scrollContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {/* Mask Background Image */}
        <View style={styles.background}>
          {/* Main Image */}
          <View style={styles.animatedImgContainer}>
            <Image source={images.mainbgimg} style={styles.maskImage} />
          </View>

          {/* Sun Moon Bg shadow */}
          <View style={styles.SunMoonImgContainer}>
            <View style={styles.blurWrapper} />

            {/* Child component will not be affected by blur */}
            <icons.Moon style={styles.SunMoonIcon} />
          </View>

          {/* Circular Progress */}
          <View style={styles.circularContainer}>
            <CircularProgress
              score={78}
              size={CIRCULAR_PROGRESS_SIZE}
              progressColor={Colors.white}
            />
          </View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContentWrapper}>
          {/* Header */}
          <Header />

          {/* Main Heading & Sub-Heading*/}
          <MainHeading />
        </View>

        {/* UPCOMING TASKS */}
        <UpcomingTasks />

        {/* Insight Container */}
        <Insight />

        <Achievement />
      </Animated.ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // For Animated Scrool
  scrollContent: {
    // padding: 16,
  },
  //

  // Mask
  background: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: MAIN_BACKGROUND_HEIGHT,
    marginBottom: 52,
    position: "relative",
    alignItems: "center",
  },
  animatedImgContainer: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  maskImage: {
    resizeMode: "cover",
  },
  //
  mainContentWrapper: {
    width: "100%",
    // height:'100%',
    position: "absolute",
    marginTop: STATUS_BAR_HEIGHT,
  },

  circularContainer: {
    position: "absolute",
    bottom: -29,
  },

  // Sun Moon
  SunMoonImgContainer: {
    width: 169,
    height: 169,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: -21,
    bottom: 44,
  },
  blurWrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    filter: "blur(100)",
  },
  SunMoonIcon: {
    width: 49,
    height: 49,
    position: "absolute",
    filter: "blur(14)",
  },
});
