import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Image, Platform, StatusBar } from "react-native";

import { Colors } from "@/constants/Colors";
import { icons } from "@/constants";
import CustomHeader from "@/components/custom-header";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "light",
        headerStyle: [
          styles.header,
          { backgroundColor: Colors.tabHeaderBackground, height: 90 },
        ],
        headerTintColor: Colors.background,
        headerShadowVisible: true,
        headerTitleStyle: {
          fontFamily: "Recoleta",
          fontSize: 20,
          fontWeight: 500,
          letterSpacing: -0.48,
        },
      }}
    >
      <Tabs.Screen
        name="quick-consultation"
        options={{
          title: "Quick consultation",
          tabBarLabel: "Quick consultation",
          headerLeft: () => (
            <icons.QuickConsultationIcon style={styles.headerIcon} />
          ),
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.home}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.home}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="thunder"
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.home}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
          header: () => (
            <>
              <StatusBar barStyle="dark-content" backgroundColor="#fff" />
              <CustomHeader />
            </>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarStyle: { display: "none" },
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.home}
              style={[styles.icon, { tintColor: color }]}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      ios: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  icon: {
    width: 32,
    height: 32,
  },
  headerIcon: {
    width: 32,
    height: 32,
  },
});
