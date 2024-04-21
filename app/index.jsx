import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import ThemedContainer from "../components/ThemedContainer";
import { Link, Redirect, router } from "expo-router";
import { images } from "../constants";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import CustomButton from "../components/CustomButton";
import { TouchableOpacity } from "react-native";

const index = () => {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/(welcome)/socialAccountScreen");
    }, 3000);
  }, []);
  return (
    <View className="flex-1 justify-center items-center">
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
        culpa.
      </Text>
      {/* <TouchableOpacity className="bg-secondary-100 p-3 rounded-none mx-4">
        <Link href="/(welcome)/welcomeScreen">
          <Text>Welcome</Text>
        </Link>
      </TouchableOpacity> */}
    </View>
  );
  return (
    <ThemedContainer>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        {/* <Text>
          THIS IS THE SPLASH SCREEN Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Aliquam, dolorum!
        </Text> */}
        <TouchableOpacity>
          <Link href="/home">
            <Text>Welcome</Text>
          </Link>
        </TouchableOpacity>
      </ScrollView>
    </ThemedContainer>
  );
};

export default index;

const styles = StyleSheet.create({});
