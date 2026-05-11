import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StyleTab = () => {
  return (
    <View style={styles.container}>
      <Text>StyleTab</Text>
    </View>
  )
}

export default StyleTab

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
})