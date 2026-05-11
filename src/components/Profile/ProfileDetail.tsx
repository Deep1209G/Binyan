import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import theme from '../../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../Button';

const ProfileDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.textcontainer}>
          <Text style={styles.title}>John Doe</Text>

          <View style={styles.iconContainer}>
            <Icon
              name="checkmark-done-circle"
              size={16}
              color={theme.colors.brightazure}
            />
          </View>
        </View>
        <Text style={styles.text}>@john_builders</Text>
        <Text style={styles.subtitle}>{'\u2022'} Construction Manager</Text>
        <Text style={styles.subtitle}>{'\u2022'} Joined January 2023</Text>

        {/*Line */}
        <View style={styles.line} />

        <Text style={styles.subtitle}>
          Construction manager with 10+ years of experience in residential and
          commercial projects.
        </Text>

        {/*Button*/}
        <View style={styles.btncontainer}>
         <Button
         title = "Edit Profile"
         onPress={() => console.log("Edit tab")}
         stylebtn={styles.btn}
         colors={[theme.colors.mutedgrayishtaupe, theme.colors.mutedgrayishtaupe]}
         styleText={styles.editText}
         />
        <Button
         title = "Share"
         onPress={() => console.log("Share tab")}
         stylebtn={styles.btn}
         colors={[theme.colors.mutedgrayishtaupe, theme.colors.mutedgrayishtaupe]}
         styleText={styles.editText}
         />
         </View>

      </View>
    </View>
  );
};

export default ProfileDetail;

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl,
  },
  card: {
    height: 235,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
    paddingVertical: theme.spacing.xxxl,
    paddingHorizontal: theme.spacing.md,
  },
  textcontainer: {
    flexDirection: 'row',
    gap: theme.spacing.xs,
  },
  iconContainer: {
    backgroundColor: theme.colors.border,
    height: 20,
    width: 20,
    borderRadius: theme.radius.round,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    backgroundColor: theme.colors.border,
    borderRadius: theme.radius.round,
    alignSelf: 'center',
  },

  title: {
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.typography.medium,
  },
  text: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.typography.regular,
    color: theme.colors.primary,
    marginTop: theme.spacing.sm,
  },
  subtitle: {
    paddingVertical: theme.spacing.xs,
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.typography.regular,
    color: theme.colors.textSecondary,
  },

  line: {
    height: 1,
    width: '100%',
    backgroundColor: theme.colors.textSecondary,
    marginVertical: 10,
  },
  btn:{
    height:34,
    width:160,
    marginTop:theme.spacing.ts,
  },

  btncontainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    
  },
  editText:{
    color:theme.colors.textPrimary,
  },
});
