import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import theme from '../../theme'

type ServiceProp = {
  text :string,
  onPress: () => void,
}

const ServiceCard = ({text, onPress}:ServiceProp) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default ServiceCard

const styles = StyleSheet.create({
    container:{
        height:110,
        width:110,
        backgroundColor:theme.colors.card,
        borderRadius:theme.radius.md,
        alignItems:'center',
        justifyContent:'flex-end', 
        marginVertical: theme.spacing.xs,
    },

    text:{
        color:theme.colors.textPrimary,
        fontSize:theme.typography.small,
        fontFamily:theme.fontFamily.bold,
        marginBottom:theme.spacing.md,
    },
})