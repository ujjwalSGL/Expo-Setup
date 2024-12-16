import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import "react-native-reanimated";

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="PopUp" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
