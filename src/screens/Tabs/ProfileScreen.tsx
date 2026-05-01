import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Profile/Header';
import ProfileImage from '../../components/Profile/ProfileImage';
import ProfileDetail from '../../components/Profile/ProfileDetail';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/*Header */}
      <View style={styles.main}>
        <Header />

        {/*Profile Image */}
        <View style={styles.overlap}>
        <ProfileImage />
        </View>

        {/*Profile Detail Card */}
        <ProfileDetail />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
  main:{},
  overlap:{
    position:'absolute',
    top:140,
    left:5,
    zIndex:1,
  },
});
