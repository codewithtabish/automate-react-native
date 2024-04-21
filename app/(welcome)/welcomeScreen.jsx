import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { Link, Redirect, router } from "expo-router";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import ThemedContainer from "../../components/ThemedContainer";
import CustomButton from "../../components/CustomButton";
import { images } from "../../constants";

const index = () => {
  return (
    <ThemedContainer>
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="flex justify-center items-center px-4 h-full">
          <Image
            resizeMode="contain"
            style={{
              width: responsiveScreenWidth(80),
              height: responsiveScreenHeight(6),
              marginTop: responsiveScreenHeight(5),
              margin: "auto",
            }}
            source={images.logo}
          />
          <Image
            style={{
              width: responsiveScreenWidth(80),
              height: responsiveScreenHeight(40),
            }}
            resizeMode="contain"
            source={images.cards}
          />

          <View className="relative mt-1">
            <Text
              className=" text-white font-bold text-center"
              style={{ fontSize: responsiveScreenFontSize(3.3) }}
            >
              Discover Endless{"\n"}
              Possibilities with{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-4 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <CustomButton
            title="Continue your Journey"
            handlePress={() => router.push("/socialAccountScreen")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
    </ThemedContainer>
  );
};

export default index;

const styles = StyleSheet.create({});
