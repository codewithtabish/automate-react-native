import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import ThemedContainer from "../../components/ThemedContainer";

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="socialAccountScreen" />
      <Stack.Screen name="welcomeScreen" />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
