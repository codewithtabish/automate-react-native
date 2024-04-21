import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import ThemedContainer from "../../components/ThemedContainer";

const AuthLayout = () => {
  return (
    <ThemedContainer>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="sign-in" />
        <Stack.Screen name="sign-up" />
      </Stack>
    </ThemedContainer>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({});
