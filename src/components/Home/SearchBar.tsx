import {
  StyleSheet,
  TextInput,
  View,
  TextStyle,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import theme from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';

type SearchBarProps = {
  placeholder: string;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

const SearchBar = ({ placeholder, textStyle, style }: SearchBarProps) => {
  return (
    <View style={[styles.container, style]}>
      
      {/* LEFT ICON */}
      <Icon
        name="search-outline"
        size={20}
        color={theme.colors.textSecondary}
      />

      {/*  INPUT */}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        style={[styles.input, textStyle]}
      />

      {/* RIGHT BUTTON */}
      <TouchableOpacity style={styles.filterButton}>
        <Icon name="filter-circle" size={45} color={theme.colors.primary} />
      </TouchableOpacity>

    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.dl, 
    height: 46,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: theme.spacing.lg,
    paddingRight: theme.spacing.ts,
  },

  input: {
    flex: 1,
    marginLeft: theme.spacing.sm,
    fontSize: theme.typography.small,
    fontFamily:theme.fontFamily.regular,
    color: theme.colors.textPrimary,
  },

  filterButton: {
    height: 45,
    width: 45,
    borderRadius: theme.radius.round,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});