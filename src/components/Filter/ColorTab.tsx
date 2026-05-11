import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ColorTab = () => {
  return (
    <View style={styles.container}>
      <Text>ColorTab</Text>
    </View>
  )
}

export default ColorTab

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})