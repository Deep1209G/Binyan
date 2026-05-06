import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Profile/Header';
import ProfileImage from '../../components/Profile/ProfileImage';
import ProfileDetail from '../../components/Profile/ProfileDetail';
import StoryHighlights from '../../components/Profile/StoryHighlights';
import Category from '../../components/Profile/Category';
import { category } from '../../data/category';

import Posts from '../../components/Profile/Category/Posts';
import BookMark from '../../components/Profile/Category/BookMark';
import About from '../../components/Profile/Category/About';
import AfflilateProgram from '../../components/Profile/Category/AfflilateProgram';
import SocialLinks from '../../components/Profile/Category/SocialLinks';
import Bathroom from '../../components/Profile/Category/Bathroom';
import theme from '../../theme';

const ProfileScreen = () => {
  const [selectedId, setSelectedId] = useState('posts');

  const componentMap: any = {
    'posts': Posts,
    'bookmark': BookMark,
    'bathroom': Bathroom,
    'about': About,
    'affiliate': AfflilateProgram,
    'social': SocialLinks,
  };
  const SelectedComponent = componentMap[selectedId] || Posts;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.main}>
        {/*Header */}
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
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Category
              title={item.title}
              active={item.id === selectedId}
              onPress={() => setSelectedId(item.id)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.category}
        />

        <View>
          <SelectedComponent />
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {},
  main: {},
  overlap: {
    position: 'absolute',
    top: 135,
    left: 5,
    zIndex: 1,
  },
  category:{
    paddingHorizontal:theme.spacing.xl,
  },

});
