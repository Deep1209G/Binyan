import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../../theme'

const BookMark = () => {
  return (
    <View  style={styles.container}>
      <Text style={styles.text}>BookMark</Text>
    </View>
  )
}

export default BookMark

const styles = StyleSheet.create({
  
  container:{
    height:200,
    backgroundColor:"white",
    paddingHorizontal: theme.spacing.xl,
  },
  
  text:{
      
     },
})