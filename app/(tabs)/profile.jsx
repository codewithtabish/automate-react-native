import { StyleSheet, Text, View,useColorScheme } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import ThemedContainer from '../../components/ThemedContainer';

const profile = () => {
  const isDark = useColorScheme()=='dark';

  return (
  <ThemedContainer>
    <Text>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. At laboriosam modi magnam similique. Enim esse, animi est odit aspernatur possimus doloremque expedita voluptatibus fuga repellat assumenda voluptate quam adipisci nobis?
    </Text>
    
    
  </ThemedContainer>
  );
}

export default profile
