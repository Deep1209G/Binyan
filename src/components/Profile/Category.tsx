import { Pressable, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import theme from '../../theme';
import LinearGradient from 'react-native-linear-gradient';

type CategoryProps = {
  title: string;
  active?: boolean;
  onPress?: () => void;
};

const Category = ({ title, active = false, onPress }: CategoryProps) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.item}>
        
        {active ? (
          <LinearGradient
            colors={theme.gradient}
            style={styles.btn}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={[styles.text, styles.activeText]}>
              {title}
            </Text>
          </LinearGradient>
        ) : (
          <View style={[styles.btn, styles.inactiveBtn]}>
            <Text style={[styles.text, styles.inactiveText]}>
              {title}
            </Text>
          </View>
        )}

      </Pressable>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.lg,
  },

  item: {
    marginRight: 12,
  },

  btn: {
    height: 34,
    paddingHorizontal: 14, // dynamic width
    borderRadius: theme.radius.xl,
    alignItems: 'center',
    justifyContent: 'center',
  },

  inactiveBtn: {
    backgroundColor: theme.colors.white,
  },

  text: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.typography.small,
  },

  activeText: {
    color: theme.colors.white,
  },

  inactiveText: {
    color: theme.colors.textPrimary,
  },
});