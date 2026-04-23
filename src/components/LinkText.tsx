import { StyleSheet, Pressable, Text, StyleProp, TextStyle} from 'react-native'
import React from 'react'

interface Props {
title: string,
onPress?: () => void,
style?: StyleProp<TextStyle>
}


const LinkText = ({title, onPress, style}:Props) => {
  return (
    <Pressable onPress={onPress}>
        <Text style={[styles.text,style]}>{title}</Text>
    </Pressable>
  );
};

export default LinkText

const styles = StyleSheet.create({
    text:{},
    
})