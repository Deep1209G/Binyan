import { StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Service/Header';
import theme from '../../theme';

const ServiceScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>

    {/*Header */}
      <Header title="All Services" />
    
    {/*All Service Card*/}
    
    </SafeAreaView>
  );
};

export default ServiceScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl,
  },
});
