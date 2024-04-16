import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
const _layout = () => {
  return (
    <SafeAreaProvider>
    <SafeAreaView
    style={{flex: 1, backgroundColor: '#fff'}}>
        <Stack>
            <Stack.Screen name='index'
            options={{headerShown:false}}
/>
        </Stack>
    </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default _layout

const styles = StyleSheet.create({})