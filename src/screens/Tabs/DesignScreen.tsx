import { StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Home/Header';
import theme from '../../theme';
import SearchBar from '../../components/Home/SearchBar';

const DesignScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

      {/*Header */}
      <Header 
      title="Hi, John Doe 👋"
      imageSrc={require('../../assets/profile.jpg')} 
      iconName="notifications-outline"/>

      {/*Search Bar */}
      <SearchBar
       placeholder="What do you need help with today?"
       />

    </SafeAreaView>
  );
};

export default DesignScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl,
  },
 
});
