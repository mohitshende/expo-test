import ProfileHeader from "@/components/profile/profile-header";
import ProfileListItem from "@/components/profile/profile-list-item";
import { icons } from "@/constants";
import { Colors } from "@/constants/Colors";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Profile Page Option's
const sections = [
  {
    title: "Profile Settings",
    data: [
      { id: 1, title: "personal information", icon: icons.Identity },
      { id: 2, title: "subscription", icon: icons.Crown },
      { id: 3, title: "connected devices", icon: icons.Watch },
      { id: 4, title: "app preferences", icon: icons.Setting },
      { id: 5, title: "medical information", icon: icons.PlusOutlined },
    ],
  },
  {
    title: "Other Options",
    data: [
      { id: 6, title: "rate us on store", icon: icons.Star },
      { id: 7, title: "feedback", icon: icons.Sms },
      { id: 8, title: "policies", icon: icons.Sms },
      { id: 9, title: "logout", icon: icons.Logout },
    ],
  },
];

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <ProfileHeader />

      {/* List Section */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {sections.map((section) => (
          <View key={section.title} style={styles.section}>
            {section.data.map((option) => (
              <ProfileListItem option={option} />
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <icons.Plus style={styles.fabIcon} />
        <Text style={styles.fabText}>health data</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background, 
  },

  // List start here
  listContainer: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  section: {
    marginBottom: 16,
    borderRadius: 12,
    borderWidth: 0.4,
    borderColor: Colors.border.secondary,
    paddingHorizontal: 15.3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.textPrimary, 
    marginBottom: 8,
    paddingHorizontal: 20,
  },

  // Floating Button
  fab: {
    position: "absolute",
    bottom: 24,
    right: 16.65,
    backgroundColor: "#0D0D0D",
    paddingVertical: 15,
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    borderRadius: 24,
    fontFamily: "Gilroy-SemiBold",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 18,
  },
  fabIcon: {
    width: 13.35,
    height: 13.35,
  },
  fabText: {
    color: Colors.background2,
    fontSize: 14,
    fontWeight: "bold",
  },
});
