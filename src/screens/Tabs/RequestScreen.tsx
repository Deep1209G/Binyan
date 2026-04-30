import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../theme';
import SearchBar from '../../components/Home/SearchBar';
import TabSwitcher from '../../components/Request/TabSwitcher';
import RequestCard from '../../components/Request/RequestCard';

const RequestScreen = () => {
  const [activeTab, setActiveTab] = useState<'private' | 'public'>('private');

  return (
    <SafeAreaView style={styles.maincontainer}>
      
      {/* Header */}
      <Text style={styles.title}>Requests</Text>

      {/* Search */}
      <SearchBar 
        style={styles.searchbar}
        placeholder='Search Requests'
      />

      {/* Tabs */}
      <TabSwitcher 
        activeTab={activeTab}
        onChange={setActiveTab}
      />

      {/* Content */}
      <View style={{ marginTop: 20 }}>
        {activeTab === 'private' ? (
          <RequestCard 
          image="deepcleaning"/>
        ) : (
          <Text>Public Requests Data</Text>
        )}
      </View>

    </SafeAreaView>
  );
};

export default RequestScreen;

const styles = StyleSheet.create({
    maincontainer:{
    flex: 1,
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl,
    },

    title: {
    alignSelf:'center',
    fontSize: theme.typography.xl,
    color: theme.colors.textPrimary,
    fontFamily: theme.fontFamily.medium,
  },
  searchbar:{
     marginTop:theme.spacing.lg,

  },
})