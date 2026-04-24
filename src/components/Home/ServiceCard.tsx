import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../../theme'

type ServiceProp = {
  text :string,
}

const ServiceCard = ({text}:ServiceProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default ServiceCard

const styles = StyleSheet.create({
    container:{
        height:120,
        width:120,
        backgroundColor:theme.colors.card,
        borderRadius:theme.radius.md,
        alignItems:'center',
        justifyContent:'flex-end', 
        marginVertical: theme.spacing.sm,
    },

    text:{
        color:theme.colors.textPrimary,
        fontSize:theme.typography.regular,
        fontWeight:theme.fontWeight.medium,
         marginBottom:theme.spacing.md,
    },
})