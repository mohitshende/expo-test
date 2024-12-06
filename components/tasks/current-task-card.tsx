import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { icons, images } from "@/constants";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

const CurrentTaskCard: React.FC<{
  task: {
    title: string;
    cardLabel?: string;
    energy: string;
    recovery: string;
    benefit: string;
    time: string;
    duration: string;
    activityType: string;
    cardBgImage: ImageSourcePropType;
  };
}> = ({ task }) => {
  return (
    <LinearGradient
      colors={["rgba(29, 173, 115, 1)", "rgba(5, 150, 105, 1)"]}
      start={[0.25, 0]}
      end={[0.67, 1]}
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image source={images.girl} />
      </View>
      {task.cardLabel && (
        <View style={styles.topLeftLabel}>
          <Text style={styles.topLeftLabelText}>{task.cardLabel}</Text>
        </View>
      )}

      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTitle}>Morning sunlight</Text>
      </View>

      <BlurView intensity={24} style={styles.blurContainer}>
        <View style={styles.stats}>
          <Text style={styles.semiBoldMutedText}>IMPACT:</Text>
          <Text style={styles.semiBoldText}>energy +15%</Text>
          <View style={styles.divider} />
          <Text style={styles.semiBoldText}>recovery +25%</Text>
        </View>
        <Text style={styles.mutedText}>Enhances vitamin D absorption</Text>
      </BlurView>

      <View style={styles.cardFooter}>
        <View style={styles.cardFooterInfo}>
          <icons.GreyClock />
          <Text style={styles.mutedInfoText}>7:00 am</Text>
          <View style={styles.mutedDot} />
          <Text style={styles.mutedInfoText}>10 mins</Text>
          <View style={styles.mutedDot} />
          <Text style={styles.mutedInfoText}>outdoor</Text>
        </View>

        <Pressable style={styles.startButton}>
          <Text style={styles.startButtonText}>Start</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

export default CurrentTaskCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    marginHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: "rgba(5, 150, 105, 1)",
    marginBottom: 10,
    // height: 188,

    // shadow
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.35,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },

  topLeftLabel: {
    position: "absolute",
    paddingVertical: 8,
    paddingHorizontal: 24,
    backgroundColor: "rgba(9, 142, 102, 1)",
    borderBottomRightRadius: 11,
  },
  topLeftLabelText: {
    color: Colors.white,
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 11,
  },
  imageContainer: {
    position: "absolute",
    right: 29,
  },

  cardTitleContainer: {
    marginTop: 27,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },

  cardTitle: {
    color: Colors.white,
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 20,
    lineHeight: 24.76,
  },
  blurContainer: {
    paddingHorizontal: 16,
    gap: 7,
    paddingVertical: 10,
  },
  semiBoldMutedText: {
    color: "rgba(245, 245, 245, 0.6)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 14.7,
  },
  mutedText: {
    color: "rgba(245, 245, 245, 0.6)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
  },
  stats: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  semiBoldText: {
    color: Colors.white,
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.15,
  },
  divider: {
    borderColor: "rgba(245, 245, 245, 0.6)",
    borderWidth: 0.4,
    height: 13,
  },

  cardFooter: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginTop: 21,
    justifyContent: "space-between",
  },

  cardFooterInfo: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },

  mutedDot: {
    backgroundColor: "rgba(245, 245, 245, 0.6)",
    width: 3,
    height: 3,
    borderRadius: "50%",
  },

  mutedInfoText: {
    color: "rgba(245, 245, 245, 0.6)",
    fontFamily: "Gilroy-SemiBold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
  },

  startButton: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 65,
  },

  startButtonText: {
    color: Colors.white,
    fontFamily: "Gilroy-Bold",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 17.33,
  },
});
