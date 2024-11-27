import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, Image, Platform } from "react-native";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";
import { icons } from "@/constants";

export default function TabLayout() {
  const colorScheme = useColorScheme();

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
          fontSize: 20,
          fontFamily: "Recoleta",
          fontWeight: 500,
          letterSpacing: -0.48,
        },
        headerLeft: () => (
          <Image
            source={icons.splash}
            style={styles.headerIcon}
            resizeMode="contain"
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Quick consultation",
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
    marginLeft: 16,
  },
});
