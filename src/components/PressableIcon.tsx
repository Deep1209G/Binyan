import { StyleSheet, Pressable } from 'react-native'
import React from 'react'
import  Icon  from 'react-native-vector-icons/Ionicons'
import theme from '../theme'


type PressableIconProps ={
    name:string,
    size:number,
    onPress:() => void;
    color: string,
}

const PressableIcon = ({name, size, onPress,color}:PressableIconProps) => {
  return (
    
    <Pressable style={styles.container} onPress={onPress}>
        <Icon name={name} size={size} color={color} />
    </Pressable>
   
  )
}

export default PressableIcon

const styles = StyleSheet.create({
    container:{
        backgroundColor:theme.colors.white,
        borderRadius:theme.radius.dl,
        height:60,
        width:60,
        alignItems:'center',
        justifyContent:'center',
    
    }
})