import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
import React from 'react';
import theme from '../../theme';
import Images, { ImagesName } from '../../assets/images/image';
import Icon from 'react-native-vector-icons/Ionicons';

interface vendorProp {
  image: ImagesName;
  title: string;
  subtitle: string;
  onPress?: () => void;
}
const VendorCard = ({ image, title, subtitle, onPress }: vendorProp) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={Images[image]} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        <View style={styles.btnContainer}>
          <Pressable style={styles.btn} onPress={onPress}>
            <Text style={styles.btnText}>Explore all</Text>
            <Icon name="arrow-forward-outline" size={15} />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default VendorCard;

const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.md,
    backgroundColor: theme.colors.darkbrown,
    height: 120,
    borderRadius: theme.radius.md,
    flexDirection: 'row',
  },
  imagecontainer: {},
  image: {
    height: 120,
    width: 150,
    borderTopLeftRadius: theme.radius.md,
    borderBottomLeftRadius: theme.radius.md,
  },
  textContainer: {
    marginLeft: theme.spacing.sm,
    marginTop: theme.spacing.xs,
    flex: 1,
  },
  title: {
    color: theme.colors.white,
    fontSize: theme.typography.large,
    fontWeight: theme.fontWeight.medium,
  },
  subtitle: {
    marginTop: theme.spacing.xs,
    color: theme.colors.mutedgrayishtaupe,
    flexShrink: 1,
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: theme.spacing.sm,
  },
  btn: {
    backgroundColor: theme.colors.cosmicLatte,
    borderRadius: theme.radius.md,
    width: 90,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.sm,
    flexDirection: 'row',
    gap: theme.spacing.xs,
  },
  btnText: {
    fontSize: theme.typography.small,
  },
});
