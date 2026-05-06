import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../../theme'

const BookMark = () => {
  return (
    <View>
      <Text style={styles.container}>BookMark</Text>
    </View>
  )
}

export default BookMark

const styles = StyleSheet.create({
     container:{
      paddingHorizontal: theme.spacing.xl,
     },
})