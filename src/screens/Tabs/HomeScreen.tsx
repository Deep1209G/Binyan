import { StyleSheet, Image, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../theme';
import PressableIcon from '../../components/PressableIcon';
import SearchBar from '../../components/SearchBar';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>

      {/* HEADER */}
      <View style={styles.headerContainer}>
        
        {/* LEFT SECTION  */}
        <View style={styles.leftSection}>
          <Image
            source={require('../../assets/profile.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.headerText}>Hi, John Doe 👋</Text>
        </View>

        {/* RIGHT SECTION (Notification Icon) */}
        <PressableIcon
          name="notifications-outline"
          size={25}
          onPress={() => console.log('Notification')}
          color={theme.colors.textSecondary}
        />
      </View>

      {/*Search Bar */}
      <View style={styles.searchBtn}>
        <SearchBar placeholder="What do you need help with today?" />
      </View>

      {/* */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerText: {
    marginLeft: theme.spacing.md,
    fontSize: theme.typography.regular,
    color: theme.colors.textSecondary,
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: theme.radius.dl,
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },

  searchBtn:{
    marginTop:theme.spacing.xxxl,

  },

});
