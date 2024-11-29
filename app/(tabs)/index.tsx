import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { Redirect } from "expo-router";

const Home = () => {
  if (true) {
    <Redirect href="/profile" />;
  }

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
