import { StyleSheet, View, FlatList} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Profile/Header';
import ProfileImage from '../../components/Profile/ProfileImage';
import ProfileDetail from '../../components/Profile/ProfileDetail';
import StoryHighlights from '../../components/Profile/StoryHighlights';
import Category from '../../components/Profile/Category';
import { category } from '../../data/category';


const ProfileScreen = () => {
  const [selectedId, setSelectedId] = useState('1');
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

        {/*Profile Detail Card */}
        <StoryHighlights />

        {/*Category*/}
         <FlatList
        data={category}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Category
            title={item.title}
            active={item.id === selectedId}
            onPress={() => setSelectedId(item.id)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />

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
    top:135,
    left:5,
    zIndex:1,
  },
});
