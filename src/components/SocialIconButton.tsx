import React from 'react'
import SocialIcon, {SocialIconName} from '../assets/socialIcon'
import { 
  StyleSheet, 
  Image,
  View, 
  Pressable, 
  ImageStyle, 
  StyleProp 
} from 'react-native'
import theme from '../theme';



interface Props{
  name: SocialIconName;
  style?: StyleProp<ImageStyle>;
}

const SocialIconButton = ({name, style}:Props) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.btn}>
      <Image
      source={SocialIcon[name]}
      style={[styles.image, style]} />
      </Pressable>
    </View>
  )
}

export default SocialIconButton

const styles = StyleSheet.create({
  container:{
    marginLeft: theme.spacing.xs,
  },

  btn:{
    width: 110,
    height: 60,
    borderRadius: theme.radius.lg, // you can later replace with theme.radius.round
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    
  },
  image:{
    width:28,
    height:30,
  },
})