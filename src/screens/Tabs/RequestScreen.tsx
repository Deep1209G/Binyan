import { StyleSheet, Text, FlatList, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../theme';
import SearchBar from '../../components/Home/SearchBar';
import TabSwitcher from '../../components/Request/TabSwitcher';
import RequestCard from '../../components/Request/RequestCard';

const RequestScreen = () => {
  const [activeTab, setActiveTab] = useState<'private' | 'public'>('private');
  const privateData = [1, 2, 3, 4];
  const publicData = [1, 2, 3];

  return (
    <SafeAreaView style={styles.maincontainer}>
      {/* Header */}
      <Text style={styles.title}>Requests</Text>

      {/* Search */}
      <SearchBar style={styles.searchbar} placeholder="Search Requests" />

      {/* Tabs */}
      <TabSwitcher activeTab={activeTab} onChange={setActiveTab} />

      {/* Content */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={activeTab === 'private' ? privateData : publicData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => <RequestCard />}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      />
    </SafeAreaView>
  );
};

export default RequestScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl,
  },

  title: {
    alignSelf: 'center',
    fontSize: theme.typography.xl,
    color: theme.colors.textPrimary,
    fontFamily: theme.fontFamily.medium,
  },
  searchbar: {
    marginTop: theme.spacing.lg,
  },

  listContent: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
});
