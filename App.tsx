import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: Constants.statusBarHeight,
  },
})
