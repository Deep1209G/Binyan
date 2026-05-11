import { Pressable, StyleSheet, View, Image, Text } from 'react-native';
import React from 'react';
import theme from '../../theme';
import SocialIcon, { SocialIconName } from '../../assets/socialIcon';
import Icon from 'react-native-vector-icons/Ionicons';

type ImageOverlayCardProps = {
  onPress: () => void;
  name: SocialIconName;
  location: string;
  title: string;
};

const ImageOverlayCard = ({
  onPress,
  name,
  title,
  location,
}: ImageOverlayCardProps) => {
  return (
    <View style={styles.card}>
      <Pressable style={styles.btn} onPress={onPress}>

        <View style={styles.imgcontainer}>
          <Image source={SocialIcon[name]} />
        </View>

        <View style={styles.textcontainer}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.subtitlecontainer}>
            <Icon name="pin-outline" size={12} color={theme.colors.white} />
            <Text style={styles.subtitle}>{location}</Text>
          </View>
        </View>

      </Pressable>
    </View>
  );
};

export default ImageOverlayCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    height: 130,
    width: 170,
    borderRadius: theme.radius.md,
    marginTop: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  btn: {
    backgroundColor: theme.colors.chineseSilver,
    height: 40,
    width: 160,
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.xs,
    alignItems: 'center',
    flexDirection: 'row',
  },
  imgcontainer: {
    backgroundColor: theme.colors.black,
    borderRadius: theme.radius.lg,
    borderColor: theme.colors.white,
    borderWidth: 1,
    height: 28,
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: theme.spacing.xs,
  },
  textcontainer: {
    flexDirection: 'column',
  },
  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.typography.xs,
    color: theme.colors.white,
  },
  subtitle: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.typography.xs,
    color: theme.colors.white,
  },

  subtitlecontainer: {
    flexDirection: 'row',
  },
});
