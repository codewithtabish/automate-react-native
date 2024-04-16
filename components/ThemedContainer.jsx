import { Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import Colors from '../constants/Colors';

const ThemedContainer = ({children}) => {
      const isDark = useColorScheme() == "dark";
  return (
    <View style={{ flex: 1 }} className="bg-primary">
      <StatusBar backgroundColor="#161622" style="light" />
      {children}
    </View>
  );
}

export default ThemedContainer
