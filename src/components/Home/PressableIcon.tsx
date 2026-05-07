import { StyleSheet, Pressable, StyleProp, ViewStyle, ColorValue } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/Ionicons'
import theme from '../../theme'


type PressableIconProps ={
    name:string,
    size:number,
    onPress:() => void;
    style?: StyleProp<ViewStyle>;
    color?: ColorValue;
}

const PressableIcon = ({name, size, onPress,style, color}:PressableIconProps) => {
  return (
    
    <Pressable style={[styles.container, style]} onPress={onPress}>
        <Icon name={name} size={size} color={color} />
    </Pressable>
   
  )
}

export default PressableIcon

const styles = StyleSheet.create({
    container:{
        backgroundColor:theme.colors.white,
        borderRadius:theme.radius.dl,
        height:46,
        width:46,
        alignItems:'center',
        justifyContent:'center',
    
    }
})