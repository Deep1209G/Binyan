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
import { DeviceHelper } from '../utils/DeviceHelper';



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
      style={[styles.image, style]}
      resizeMode="contain" 
      />
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
    width:DeviceHelper.calWidth(106),
    height:DeviceHelper.calHeight(46),
    borderRadius: theme.radius.md, // you can later replace with theme.radius.round
    backgroundColor: theme.colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    
  },
  image:{
    width:DeviceHelper.calWidth(27),
    height:DeviceHelper.calHeight(27),
  }
})
  
