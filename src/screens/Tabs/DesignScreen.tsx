import { StyleSheet, FlatList, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Home/Header';
import theme from '../../theme';
import SearchBar from '../../components/Home/SearchBar';
import ServiceSelector from '../../components/Design/ServiceSelector';
import { serviceSelector } from '../../data/serviceSelector';
import ImageOverlayCard from '../../components/Design/ImageOverlayCard';
import { cardData } from '../../data/cardData';

const DesignScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/*Header */}
        <Header
          title="Hi, John Doe 👋"
          imageSrc={require('../../assets/profile.jpg')}
          iconName="notifications-outline"
        />

        {/*Search Bar */}
        <SearchBar placeholder="What do you need help with today?" />

        {/*Service Selector*/}
        <View>
          <FlatList
            horizontal
            data={serviceSelector.slice(0, 7)}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <ServiceSelector
                text={item.title}
                onPress={() => console.log(item.title)}
              />
            )}
          />
        </View>

        {/*Designs*/}
        <Text style={styles.title}>Designs</Text>
        <FlatList
          data={cardData}
          keyExtractor={item => item.id}
          numColumns={2} 
          columnWrapperStyle={{ justifyContent: 'space-between' }} 
          renderItem={({ item }) => (
            <ImageOverlayCard
              name={item.name}
              title={item.title}
              location={item.location}
              onPress={() => console.log(item.title)}
            />
          )}
        />
      </ScrollView>
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
  title: {
    marginTop: theme.spacing.md,
    fontSize: theme.typography.xl,
    color: theme.colors.textPrimary,
    fontFamily: theme.fontFamily.medium,
  },
});
