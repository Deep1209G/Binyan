import {
  StyleProp,
  StyleSheet,
  Text,
  Pressable,
  ViewStyle,
} from 'react-native';
import React from 'react';
import theme from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

type FilterButtonProps = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  title: string;
  active?: boolean;
};

const FilterButton = ({
  style,
  textStyle,
  onPress,
  title,
  active = false,
}: FilterButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      {active ? (
        <LinearGradient
          colors={theme.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.container, style]}
        >
          <Text style={[styles.activeText, textStyle]}>
            {title}
          </Text>

          <Icon
            name="chevron-down-outline"
            size={10}
            color={theme.colors.white}
          />
        </LinearGradient>
      ) : (
        <Pressable
          style={[styles.container, style]}
          onPress={onPress}
        >
          <Text style={[styles.text, textStyle]}>
            {title}
          </Text>

          <Icon
            name="chevron-down-outline"
            size={10}
            color={theme.colors.primary}
          />
        </Pressable>
      )}
    </Pressable>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.lg,
    height: 24,
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.spacing.sm,

    alignSelf: 'flex-start',
    borderRadius: theme.radius.xl,

    justifyContent: 'center',
    gap: theme.spacing.xs,
  },

  text: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.typography.regular,
    color: theme.colors.textSecondary,
  },

  activeText: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.typography.regular,
    color: theme.colors.white,
  },
});