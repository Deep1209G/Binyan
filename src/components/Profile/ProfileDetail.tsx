import { StyleSheet, View } from 'react-native';
import React from 'react';
import theme from '../../theme';

const ProfileDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
      </View>
    </View>
  );
};

export default ProfileDetail;

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl,
  },
  card: {
    height: 230,
    backgroundColor: theme.colors.white,
    borderRadius:theme.radius.md,
  },
});
