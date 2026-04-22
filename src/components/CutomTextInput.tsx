import { StyleSheet, TextInput, View, TextInputProps } from 'react-native';
import React from 'react';
import theme from '../theme';

interface CustomTextInputProps extends TextInputProps {
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  prefix?: React.ReactNode;
}
const CustomTextInput = ({
  icon,
  rightIcon,
  prefix,
  ...props
  
}: CustomTextInputProps) => {
  return (
    <View style={styles.container}>
      {icon && <View style={styles.leftIcon}>{icon}</View>}
      
       {prefix && <View style={styles.prefix}>{prefix}</View>}
      <TextInput
        style={styles.text}
        placeholderTextColor={theme.colors.textSecondary}
        {...props}
      />
      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
  },

  text: {
    flex: 1,
    fontSize: theme.typography.medium,
  },

  leftIcon: {
    marginRight: 10,
  },

  rightIcon: {
    marginLeft: 10,
  },

 prefix: {
  marginRight: 8,
  paddingHorizontal: 10,
  justifyContent: 'center',
  borderRightWidth: 1,
  borderColor: '#ddd',
},

});
