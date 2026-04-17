import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Dimensions,
} from 'react-native';
import React, { useState, useRef } from 'react';
import SelectableItem from '../components/SelectableItem';
import Icon from 'react-native-vector-icons/Ionicons';
import ProgressDot from '../components/ProgressDot';
import GradientButton from '../components/GradientButton';

const { width, height } = Dimensions.get('window');

const OnBoardingFlow = () => {
  const [language, setLanguage] = useState('English');
  const [accountType, setAccountType] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < DATA.length - 1) {
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
      setCurrentIndex(prev => prev + 1);
    } else {
      console.log('Onboarding Complete');
    }
  };

  const DATA = [
    {
      key: 'language',
      render: () => (
        <View style={styles.screen}>
          <View>
            <Text style={styles.title}>Choose Your Language</Text>
            <Text style={styles.subtitle}>
              Select your preferred language.
            </Text>

            <SelectableItem
              label="English"
              selected={language === 'English'}
              onPress={() => setLanguage('English')}
              showLine
            />
            <SelectableItem
              label="Arabic"
              selected={language === 'Arabic'}
              onPress={() => setLanguage('Arabic')}
              showLine
            />
          </View>
        </View>
      ),
    },

    {
      key: 'account',
      render: () => (
        <View style={styles.screen}>
          <View>
            <Text style={styles.title}>Choose Your Account Type</Text>

            <SelectableItem
              icon={<Icon name="person" size={18} color="#FF6A00" />}
              label="Individual"
              selected={accountType === 'Individual'}
              onPress={() => setAccountType('Individual')}
              showLine
            />

            <SelectableItem
              icon={<Icon name="people" size={18} color="#FF6A00" />}
              label="Organization"
              selected={accountType === 'Organization'}
              onPress={() => setAccountType('Organization')}
              showLine
            />
          </View>
        </View>
      ),
    },

    {
      key: 'service',
      render: () => (
        <View style={styles.screen}>
          <View>
            <Text style={styles.title}>Are you a service provider?</Text>

            <View style={styles.row}>
              <SelectableItem
                variant="card"
                icon={<Icon name="person" size={18} color="#FF6A00" />}
                label="Browse"
                selected={serviceType === 'Browse'}
                onPress={() => setServiceType('Browse')}
              />

              <SelectableItem
                variant="card"
                icon={<Icon name="business" size={18} color="#FF6A00" />}
                label="Create Profile"
                selected={serviceType === 'Create Profile'}
                onPress={() => setServiceType('Create Profile')}
              />
            </View>
          </View>
        </View>
      ),
    },

    {
      key: 'on1',
      render: () => (
        <View style={styles.screen}>
          <View style={styles.centerContent}>
            <Text style={styles.title}>Welcome to Binyan</Text>
            <Text style={styles.subtitle}>
              Discover amazing services near you.
            </Text>
          </View>
        </View>
      ),
    },

    {
      key: 'on2',
      render: () => (
        <View style={styles.screen}>
          <View style={styles.centerContent}>
            <Text style={styles.title}>Find Experts</Text>
            <Text style={styles.subtitle}>
              Plumbers, electricians & more.
            </Text>
          </View>
        </View>
      ),
    },

    {
      key: 'on3',
      render: () => (
        <View style={styles.screen}>
          <View style={styles.centerContent}>
            <Text style={styles.title}>Get Started</Text>
            <Text style={styles.subtitle}>
              Let’s begin your journey.
            </Text>
          </View>
        </View>
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={DATA}
        ref={flatListRef}
        keyExtractor={(item) => item.key}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.x / width
          );
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={{ width, height }}>
            {item.render()}
          </View>
        )}
      />

      <View style={styles.bottom}>
        <ProgressDot total={DATA.length} current={currentIndex} />
        <GradientButton
          title={
            currentIndex === DATA.length - 1
              ? 'Get Started'
              : 'Next'
          }
          onPress={handleNext}
        />
      </View>
    </View>
  );
};

export default OnBoardingFlow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  screen: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', // ✅ centered content
  },

  centerContent: {
    alignItems: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: '600',
  },

  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginTop: 10,
    marginBottom: 20,
  },

  row: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 10,
  },

  bottom: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});