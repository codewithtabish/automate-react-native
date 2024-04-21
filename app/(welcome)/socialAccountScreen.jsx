import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ThemedContainer from "../../components/ThemedContainer";
import { icons, images } from "../../constants";
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../../components/CustomButton";

const socialAccountScreen = () => {
  return (
    <ThemedContainer>
      <View className="flex-1 h-full justify-center p-4">
        <Image
          style={{
            width: responsiveScreenWidth(60),
            height: responsiveScreenHeight(5),
          }}
          resizeMode="contain"
          source={images.logo}
        />
        <View
          className="my-5  overflow-x-hidden"
          style={{ maxWidth: responsiveScreenWidth(85) }}
        >
          <View className="flex-row gap-2 items-center my-2">
            <Text className="font-psemibold text-2xl text-white">
              Welcome to
            </Text>
            <Text className="text-secondary-100 text-2xl font-psemibold">
              Aora
            </Text>
          </View>
          <Text
            className="text-white font-plight mt-2"
            style={{ fontSize: responsiveScreenFontSize(2.5) }}
          >
            Create your account to discover and share amazing books
          </Text>
        </View>
        <View>
          <CustomButton
            title={"continue with Apple"}
            icon={icons.apple}
            containerStyles={"flex-row space-around gap-1 items-center my-2"}
            // isLoading={true}
            iconStyles={"mr-5"}
          />
          <CustomButton
            title={"continue with Facebook"}
            icon={icons.facebook}
            containerStyles={"flex-row space-around gap-1 items-center my-2"}
            // isLoading={true}
            iconStyles={"mr-5"}
          />
          <CustomButton
            title={"continue with Google"}
            icon={icons.google}
            containerStyles={"flex-row space-around gap-1 items-center my-2"}
            // isLoading={true}
            iconStyles={"mr-5"}
          />
        </View>
      </View>
      <StatusBar backgroundColor="#161622" style="light" />
    </ThemedContainer>
  );
};

export default socialAccountScreen;

const styles = StyleSheet.create({});
