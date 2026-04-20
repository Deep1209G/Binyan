import { StyleSheet, TextInput, View, TextInputProps } from 'react-native'
import React from 'react'
import theme from '../theme';

interface CustomTextInputProps extends TextInputProps {
    icon: React.ReactNode;
    rightIcon?: React.ReactNode;
    
}
const CustomTextInput = ({icon, rightIcon, ...props}:CustomTextInputProps) => {
  return (
    <View style={styles.container}>
      {icon}
      <TextInput 
      {...props}
       />
       {rightIcon}
    </View>
  )
}

export default CustomTextInput;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    alignItems: 'center', 
    backgroundColor: theme.white,
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical:theme.xs,
  },
})