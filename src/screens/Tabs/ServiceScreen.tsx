import { StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Service/Header';
import theme from '../../theme';
import SearchBar from '../../components/Home/SearchBar';
import AllServiceCard from '../../components/Service/AllServiceCard';
import { services } from '../../data/Services';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native'; 
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

const ServiceScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedId, setSelectedId] = useState<string>('1');
  return (
    <SafeAreaView style={styles.mainContainer}>

    {/*Header */}
    <Header title="All Services" />
    
    {/*Search Bar */}
    <SearchBar 
     placeholder='Search Services'
     style={styles.searchbar}/>

    {/*All Service Card*/}
    <FlatList 
    data={services}
    keyExtractor={(item) => item.id}
    numColumns={3}
    showsVerticalScrollIndicator={false}
    renderItem={({item}) => (
    <AllServiceCard 
    active={selectedId === item.id}
    title={item.title} 
    onPress={() => setSelectedId(item.id)}/>) }
    />

    {/*Select Button*/}
    <Button
      onPress={() => navigation.navigate('ContractorList')}
      title="Select"
      stylebtn={styles.btn}
      styleText= {styles.btntext} />

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
  searchbar:{
    marginTop:theme.spacing.md,
  },
  btn:{
    height: 55,
    width: '100%',
    marginTop:theme.spacing.md,
    borderRadius:theme.radius.md,
  },
  btntext:{
    fontSize: theme.typography.medium,
    fontFamily:theme.fontFamily.bold,
  }
});
