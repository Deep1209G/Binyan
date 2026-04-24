import { StyleSheet, Image, Text, View, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../theme';
import PressableIcon from '../../components/Home/PressableIcon';
import SearchBar from '../../components/Home/SearchBar';
import ServiceCard from '../../components/Home/ServiceCard';
import { services, chunkArray } from '../../data/Services';

const chunkedServices = chunkArray(services, 2);

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
        />
      </View>

      {/*Search Bar */}
      <View style={styles.searchBtn}>
        <SearchBar placeholder="What do you need help with today?" />
      </View>

      {/* Services Section*/}

      <Text style={styles.srviceTitle}>Services</Text>
      <View style={styles.cardContainer}>
        <FlatList
          data={chunkedServices}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.column}>
              {item.map((service: any) => (
                <ServiceCard key={service.id} text={service.title} />
              ))}
            </View>
          )}
        />
      </View>
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

// HEADER 
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

// Search Bar
  searchBtn: {
    marginTop: theme.spacing.xxxl,
  },

 //Service & card
  srviceTitle: {
    marginTop: theme.spacing.xl,
    fontSize: theme.typography.xl,
    color: theme.colors.black,
    fontWeight: theme.fontWeight.medium,
  },

  cardContainer: {
    marginTop: theme.spacing.md,
  },
  
  column: {
  marginRight: 12,
},
});
