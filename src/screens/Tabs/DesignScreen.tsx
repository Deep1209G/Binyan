import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const DesignScreen = () => {
  return (
      <SafeAreaView style={styles.container}>
      <Text>DesignScreen</Text>
      </SafeAreaView>
  )
}

export default DesignScreen

const styles = StyleSheet.create({
    container:{},
})