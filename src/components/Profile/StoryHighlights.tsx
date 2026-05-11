import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import theme from '../../theme';

const StoryHighlights = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}></View>
      <Text style={styles.text}>Add Highlights</Text>
    </View>
  );
};

export default StoryHighlights;

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.ts,
    paddingHorizontal: theme.spacing.xl,
  },
  circle: {
    height: 64,
    width: 64,
    backgroundColor: theme.colors.border,
    borderRadius: theme.radius.round,
    borderWidth:2,
    borderColor:theme.colors.white,
  },
  text:{
    fontFamily:theme.fontFamily.medium,
    fontSize:theme.typography.small,
    paddingVertical:theme.spacing.xs,
    color:theme.colors.textSecondary,
    
  },
});
