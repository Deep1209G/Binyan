import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../../theme'

const Bathroom = () => {
  return (
    <View style={styles.container}>
      <Text>Bathroom</Text>
    </View>
  )
}

export default Bathroom

const styles = StyleSheet.create({
     container:{
      paddingHorizontal: theme.spacing.xl,
     },
})