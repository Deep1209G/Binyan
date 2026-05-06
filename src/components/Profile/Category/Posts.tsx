import { StyleSheet, View, Image, Text } from 'react-native';
import React from 'react';
import theme from '../../../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import PressableIcon from '../../Home/PressableIcon';

const Posts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>

        {/* HEADER */}
        <View style={styles.header}>
          
          {/* LEFT SIDE */}
          <View style={styles.left}>
            <Image
              source={require('../../../assets/profile.jpg')}
              style={styles.img}
            />

            <View style={styles.column}>
              <View style={styles.textcontainer}>
                <Text style={styles.title}>John Doe</Text>

                <View style={styles.iconContainer}>
                  <Icon
                    name="checkmark-done-circle"
                    size={14}
                    color={theme.colors.brightazure}
                  />
                </View>
              </View>

              <Text style={styles.subtitle}>Today, 2:13 PM</Text>
            </View>
          </View>

          {/* RIGHT SIDE ICON */}
          <PressableIcon
            name="ellipsis-horizontal-outline"
            size={20}
            style={styles.icon}
            onPress={() => console.log('menu')}
          />
        </View>

      </View>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.xl,
  },

  main: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
    height: 512,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  column: {
    marginLeft: theme.spacing.sm,
    justifyContent: 'center',
  },

  img: {
    height: 40,
    width: 40,
    borderRadius: theme.radius.round,
  },

  textcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },

  title: {
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.typography.regular,
  },

  subtitle: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.typography.xs,
    color: theme.colors.textSecondary,
  },

  iconContainer: {
    backgroundColor: theme.colors.border,
    height: 18,
    width: 18,
    borderRadius: theme.radius.round,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    backgroundColor: theme.colors.border,
    height: 40,
    width: 40,
    borderRadius: theme.radius.round,
    alignItems: 'center',
    justifyContent: 'center',
  },
});