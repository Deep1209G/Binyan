import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../theme';
import PressableIcon from '../../components/Home/PressableIcon';
import SearchBar from '../../components/Home/SearchBar';
import FilterButton from '../../components/Filter/FilterButton';
import { filters } from '../../data/filterData';
import CategoryTab from '../../components/Filter/CategoryTab';
import ColorTab from '../../components/Filter/ColorTab';
import StyleTab from '../../components/Filter/StyleTab';
import TypeTab from '../../components/Filter/TypeTab';
import { 
  View, 
  StyleSheet,  
  LayoutAnimation,
  Platform, 
  UIManager,
 } from 'react-native';


// Enable animation for Android
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
const ContractorListScreen = () => {
  const [selectedFilter, setSelectedFilter] = useState('category');

  const componentMap: any = {
    category: CategoryTab,
    color: ColorTab,
    style: StyleTab,
    type: TypeTab,
  };
  
  const SelectedComponent = componentMap[selectedFilter] || CategoryTab;

  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <PressableIcon
        name="arrow-back-outline"
        size={20}
        color={theme.colors.textSecondary}
        onPress={() => console.log('Notification')}
      />

      {/* Search Bar */}
      <SearchBar placeholder="Search Contractors" style={styles.searchBar} />

      {/* Contractor List  */}
      <View style={styles.row}>
        {filters.map(item => (
          <FilterButton
            key={item.id}
            title={item.title}
            active={selectedFilter === item.id}
            onPress={() => {

              LayoutAnimation.configureNext(
                LayoutAnimation.Presets.easeInEaseOut
              );

              setSelectedFilter(item.id);
            }}
          />
        ))}
      </View>

      <View>
        <SelectedComponent />
      </View>
    </SafeAreaView>
  );
};

export default ContractorListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl,
  },
  searchBar: {
    marginTop: theme.spacing.lg,
  },

  row: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
});
