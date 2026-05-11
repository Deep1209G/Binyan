import { StyleSheet, Pressable, Text, View } from 'react-native';
import React from 'react';
import theme from '../../theme';

type ServiceSelector = {
  text: string;
  onPress: () => void;
};
const ServiceSelector = ({ text, onPress }: ServiceSelector) => {
  return (
    <View style={styles.container}>
    <Pressable onPress={onPress} style={styles.btn}>
    </Pressable>
    <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default ServiceSelector;

const styles = StyleSheet.create({
  container:{
    height:77,
    width:68,
    alignItems:'center',
    justifyContent:'center',
    marginTop: theme.spacing.md,
  },
  btn: {
    height: 48,
    width: 48,
    borderRadius: theme.radius.xl,
    backgroundColor: theme.colors.pastelOrange,
    marginTop: theme.spacing.xs,
  },

  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.small,
    fontFamily: theme.fontFamily.medium,
    marginTop: theme.spacing.sm,
  },
});
