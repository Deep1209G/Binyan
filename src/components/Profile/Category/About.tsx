import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../../theme'

const About = () => {
  return (
    <View style={styles.container}>
      <Text>About</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container:{
      paddingHorizontal: theme.spacing.xl,
    },
})