import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import theme from '../../theme'

const ProfileImage = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/profile.jpg')} style={styles.img}/>
    </View>
  )
}

export default ProfileImage

const styles = StyleSheet.create({
    container:{
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl,
    },
    img:{
        height:104,
        width:104,
        borderRadius:theme.radius.round,
        borderWidth:2,
        borderColor:theme.colors.primary,
    },
})