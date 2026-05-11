import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../../theme'

const AfflilateProgram = () => {
  return (
    <View style={styles.container}>
      <Text>AfflilateProgram</Text>
    </View>
  )
}

export default AfflilateProgram

const styles = StyleSheet.create({
    container:{
      paddingHorizontal: theme.spacing.xl,
    },
})