import { StyleSheet, Text, View, Image, ImageSourcePropType  } from 'react-native';
import React from 'react';
import PressableIcon from './PressableIcon';
import theme from '../../theme';

type headerProp = {
  title: string;
  imageSrc: ImageSourcePropType;
  iconName: string;
};

const Header = ({ title, imageSrc, iconName }: headerProp) => {
  return (
    <View style={styles.headerContainer}>
      {/* LEFT SECTION  */}
      <View style={styles.leftSection}>
        <View  style={styles.profileImageconatiner}>
        <Image
          source={imageSrc}
          style={styles.profileImage}
        />
        </View>
        <Text style={styles.headerText}>{title}</Text>
      </View>

      {/* RIGHT SECTION (Notification Icon) */}
      <PressableIcon
        name={iconName}
        size={20}
        onPress={() => console.log('Notification')}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageconatiner:{
    width: 46,
    height: 46,
    borderRadius: theme.radius.dl,
    borderColor: theme.colors.primary,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
  },

  headerText: {
    marginLeft: theme.spacing.md,
    fontSize: theme.typography.small,
    color: theme.colors.textSecondary,
    fontFamily: theme.fontFamily.regular,
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: theme.radius.dl,
  },
});
