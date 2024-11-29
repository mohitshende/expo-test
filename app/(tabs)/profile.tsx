import React, { ReactElement, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { icons } from "@/constants";
import { Colors } from "@/constants/Colors";

import BottomSheet from "@/components/bottom-sheet";
import BottomSheetBody from "@/components/profile/bottom-sheet/bottom-sheet-body";
import BottomSheetHeader from "@/components/profile/bottom-sheet/bottom-sheet-header";
import ConnectedDevices from "@/components/profile/component/connected-devices";
import PersonalInformation from "@/components/profile/component/personal-information";
import ProfileHeader from "@/components/profile/component/profile-header";
import ProfileListItem from "@/components/profile/component/profile-list-item";
import MedicalInformation from "@/components/profile/component/medical-information";
import BottomSheetFooter from "@/components/profile/bottom-sheet/bottom-sheet-footer";

interface Option {
  id: number;
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  component?: ReactElement<any, any>;
}

interface Section {
  title: string;
  data: Option[];
}

// Profile Page Option's
const sections: Section[] = [
  {
    title: "Profile Settings",
    data: [
      {
        id: 1,
        title: "personal information",
        icon: icons.Identity,
        component: (
          <>
            <PersonalInformation />
            <BottomSheetFooter />
          </>
        ),
      },
      {
        id: 2,
        title: "subscription",
        icon: icons.Crown,
        component: <PersonalInformation />,
      },
      {
        id: 3,
        title: "connected devices",
        icon: icons.Watch,
        component: <ConnectedDevices />,
      },
      {
        id: 4,
        title: "app preferences",
        icon: icons.Setting,
        component: <PersonalInformation />,
      },
      {
        id: 5,
        title: "medical information",
        icon: icons.PlusOutlined,
        component: <MedicalInformation />,
      },
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<Option>();

  const onClose = () => {
    setIsModalOpen(false);
  };

  const onProfileListItemPress = (data: Option) => {
    setModalContent(data);
    setIsModalOpen(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent barStyle="light-content" />
      {/* Header Section */}
      <ProfileHeader />

      {/* List Section */}
      <ScrollView contentContainerStyle={styles.listContainer}>
        {sections.map((section) => (
          <View key={section.title} style={styles.section}>
            {section.data.map((option, index) => (
              <ProfileListItem
                key={option.id}
                option={option}
                onPress={() => onProfileListItemPress(option)}
                isLastChild={index === section.data.length - 1}
              />
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
        <icons.Plus style={styles.fabIcon} />
        <Text style={styles.fabText}>health data</Text>
      </TouchableOpacity>

      <BottomSheet isVisible={isModalOpen} onClose={onClose}>
        <BottomSheetHeader
          TitleIcon={modalContent?.icon}
          title={modalContent?.title || ""}
          onClose={onClose}
        />

        <BottomSheetBody>{modalContent?.component}</BottomSheetBody>
      </BottomSheet>
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

  // Bottom Sheet
  bottomSheetHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
});
