import { Image, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import theme from '../../theme';
import Images, { ImagesName } from '../../assets/images/image';

type RequestCard = {
  image: ImagesName;
};

const RequestCard = ({ image }: RequestCard) => {
  return (
    <View style={styles.container}>
        {/*Header Section */}
      <View style={styles.header}>
        <Image style={styles.img} source={Images[image]} />

        <View style={styles.mainheader}>
          <View style={styles.headertextcontainer}>
            <Text style={styles.title}>Deep Cleaning – 3BHK</Text>
            
            <View style={styles.datecontainer}>
              <Text style={styles.date}>12/4/2025</Text>
            </View>
            
            <View style={styles.outercircle}>
              <View style={styles.innercircle}></View>
            </View>
          </View>

          <Text style={styles.subtitle}>@Umair K.</Text>

        </View>
      </View>
    </View>
  );
};

export default RequestCard;

const styles = StyleSheet.create({
  container: {
    height: 215,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
  },
  header: {
    flexDirection: 'row',
    marginTop: theme.spacing.md,
    alignItems: 'center',
  },
  mainheader: {
    flexDirection: 'column',
  },

  title: {
    fontFamily: theme.fontFamily.bold,
    fontSize: theme.typography.medium,
    marginLeft: theme.spacing.sm,
  },

  datecontainer:{
     backgroundColor: theme.colors.mutedgrayishtaupe,
     borderRadius: theme.radius.md,
     marginLeft: theme.spacing.lg,
     justifyContent:'center',
     alignItems:'center',
     height:25,
     width:70,
  },

  date: { 
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.typography.small,
  },

  subtitle: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.typography.small,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.sm,
  },

  headertextcontainer: {
    flexDirection: 'row',
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: theme.radius.round,
    borderWidth: 3,
    borderColor: theme.colors.cosmicLatte,
    marginLeft: theme.spacing.md,
  },
  outercircle: {
    height: 25,
    width: 25,
    borderRadius: theme.radius.round,
    backgroundColor: theme.colors.backgroundDot,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: theme.spacing.sm,
  },
  innercircle: {
    height: 15,
    width: 15,
    borderRadius: theme.radius.round,
    backgroundColor: theme.colors.primary,
  },
});
