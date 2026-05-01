import { Image, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import theme from '../../theme';
import Images from '../../assets/images/image';
import SocialIcon from '../../assets/socialIcon';
import Button from '../Button';

const RequestCard = () => {
  return (
    <View style={styles.container}>
      {/*Header Section */}
      <View style={styles.header}>
        <Image style={styles.img} source={Images.deepcleaning} />

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

      {/*Horizontal Line */}
      <View style={styles.line} />

      {/* Middle Content */}
      <View style={styles.midddlecontainer}>
        <View>
          <Text style={styles.subtitle}>
            Looking for quotes on a complete {'\n'}kitchen renovation
            including...
          </Text>
        </View>

        <View style={styles.imgcontainer}>
          <Image source={SocialIcon.image1} />
        </View>
      </View>

      {/*Bottom content */}

      <View style={styles.bottomcontainer}>
        
        <View style={styles.leftcontainer}>
          
          <View style={styles.row}>
            <Image
              source={SocialIcon.location}
              style={{ height: 16, width: 12 }}
            />
            <Text style={styles.text}>Abu Dhabi, Downtown</Text>
          </View>
          
          <View style={styles.row}>
            <Image
              source={SocialIcon.money}
              style={{ height: 15, width: 13 }}
            />
            <Text style={styles.text}>$10,000 - $15,000</Text>
          </View>
        </View>

        <View style={styles.rightcontainer}>
          
          <View style={styles.row}>
            <Image
              source={SocialIcon.company}
              style={{ height: 15, width: 12 }}
            />
            <Text style={styles.text}>Company</Text>
          </View>
          
          <View style={styles.row}>
            <Image
              source={SocialIcon.rennovation}
              style={{ height: 17, width: 12 }}
            />
            <Text style={styles.text}>House - Renovation</Text>
          </View>
        </View>
      </View>

      {/*Button*/}
      <Button 
      onPress={() => console.log("View Details")}
      title="View Details"/>

    </View>
  );
};

export default RequestCard;

const styles = StyleSheet.create({
  container: {
    height: 245,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.sm,
  },

  // header
  header: {
    flexDirection: 'row',
    marginTop: theme.spacing.ts,
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

  datecontainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    marginLeft: theme.spacing.lg,
    alignItems: 'center',
    height: 25,
    width: 70,
  },

  date: {
    marginTop: theme.spacing.xs,
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.typography.small,
  },

  subtitle: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.typography.regular,
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
  },

  outercircle: {
    height: 25,
    width: 25,
    borderRadius: theme.radius.round,
    backgroundColor: theme.colors.card,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: theme.spacing.sm,
  },

  innercircle: {
    height: 15,
    width: 15,
    borderRadius: theme.radius.round,
    backgroundColor: theme.colors.accent,
  },

  // Line

  line: {
    height: 2,
    width: 355,
    backgroundColor: theme.colors.border,
    marginVertical: 10,
  },

  // middle content

  midddlecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imgcontainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.radius.round,
    borderColor: theme.colors.white,
    borderWidth: 1,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.sm,
  },

  // Bottom Content

  bottomcontainer: {
    flexDirection: 'row',
    justifyContent:'space-around',
  },

  leftcontainer: {
    flexDirection: 'column',
  },
  rightcontainer: {
    flexDirection: 'column',
  },

  row: {
    flexDirection: 'row',
    marginTop:theme.spacing.sm,
    gap:theme.spacing.sm,
  },

  text: {
    color:theme.colors.mutedbluegray,
    fontFamily:theme.fontFamily.regular,
  },

});
