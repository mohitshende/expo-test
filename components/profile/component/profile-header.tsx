import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";
import React from "react";
import { images, icons } from "@/constants";
import { Colors } from "@/constants/Colors";

const ProfileHeader = () => {
  return (
    <ImageBackground
    source={images.backgroundPrint}
    style={styles.header}
    imageStyle={styles.backgroundImage}
  >
      {/* Here Back Icon */}

      <Image source={images.userProfile} style={styles.profileImage} />
      <Text style={styles.name}>Mark Maurice</Text>
      <Text style={styles.memberSince}>MEMBER SINCE DEC'24</Text>
    </ImageBackground>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.black,
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    elevation: 4,
    paddingTop:
      Platform.OS === "android" ? (StatusBar.currentHeight || 44) + 30 : 74,
  },
  backgroundImage: {
    resizeMode: "cover", // Adjust how the image fits
  },
  backButton: {
    // position: "absolute",
    // top: 20,
    // left: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: "#fff",
  },
  profileImage: {
    width: 104,
    height: 104,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#000",
    marginBottom: 6,
  },
  name: {
    fontFamily: "Recoleta",
    fontSize: 32,
    fontWeight: 500,
    lineHeight: 43.52,
    letterSpacing: 0.43,
    color: Colors.white,
  },
  memberSince: {
    fontFamily: "Gilroy-SemiBold",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 17.15,
    letterSpacing: 0.43,
    color: "rgba(255, 255, 255, 0.7)",
  },
});
