import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../../theme'

const SocialLinks = () => {
  return (
    <View style={styles.container}>
      <Text>SocialLinks</Text>
    </View>
  )
}

export default SocialLinks

const styles = StyleSheet.create({
     container:{
      paddingHorizontal: theme.spacing.xl,
     },
})