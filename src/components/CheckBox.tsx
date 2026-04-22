import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../theme';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      
      <Pressable
        style={[styles.box, checked && styles.checked]}
        onPress={() => setChecked(!checked)}
      >
        {checked && <Icon name="checkmark" size={14} color={theme.colors.white} />}
      </Pressable>

    </View>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  box: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor:theme.colors.border,
    borderRadius: theme.radius.xs,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.sm,
  },

  checked: {
    backgroundColor:theme.colors.primary,
    borderColor: theme.colors.primary,
  },

});