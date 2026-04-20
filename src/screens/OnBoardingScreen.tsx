import { StyleSheet, View, FlatList, Text, Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SelectableItem from '../components/SelectableItem';
import Icon from 'react-native-vector-icons/Ionicons';
import ProgressDot from '../components/ProgressDot';
import GradientButton from '../components/GradientButton';
import SkipButton from '../components/SkipButton';
import { RootStackParamList } from '../../App';
import theme from '../theme';

const { width, height } = Dimensions.get('window');

interface OnBoardingFlowScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'OnBoardingFlow'>;
}

const OnBoardingScreen = ({ navigation }: OnBoardingFlowScreenProps) => {
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
      navigation.replace('Login');
    }
  };

  const DATA = [
    {
      key: 'language',
      render: () => (
        <View style={styles.screen}>
          <Text style={styles.title}>Choose Your Language</Text>
          <Text style={styles.subtitle}>
            Select your preferred language to use go my go easy.
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
      ),
    },

    {
      key: 'account',
      render: () => (
        <View style={styles.screen}>
          <Text style={styles.title}>Choose Your Account Type</Text>
          <Text style={styles.subtitle}>
            Tell us who you are, so we can personalize your experience. You can
            always update this later in settings.
          </Text>

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

          <SelectableItem
            icon={<Icon name="settings" size={15} color="#FF6A00" />}
            label="Service Provider"
            selected={accountType === 'Service Provider'}
            onPress={() => setAccountType('Service Provider')}
            showLine
          />
        </View>
      ),
    },

    {
      key: 'service',
      render: () => (
        <View style={styles.screen}>
          <Text style={styles.title}>Are you a service provider?</Text>
          <Text style={styles.subtitle}>
            Choose how you'd like to continue.
          </Text>

          <View style={styles.row}>
            <SelectableItem
              variant="card"
              icon={<Icon name="person" size={18} color={theme.primary} />}
              label="Browse"
              selected={serviceType === 'Browse'}
              onPress={() => setServiceType('Browse')}
            />

            <SelectableItem
              variant="card"
              icon={<Icon name="business" size={18} color={theme.primary} />}
              label="Create Profile"
              selected={serviceType === 'Create Profile'}
              onPress={() => setServiceType('Create Profile')}
            />
          </View>
        </View>
      ),
    },

    {
      key: 'on1',
      render: () => (
        <View style={styles.wrapper}>
          <SkipButton />

          <View style={styles.screen}>
            <View style={styles.centerContent}>
              <View style={styles.titleWrap}>
                <Text style={styles.title}>
                  Turn Your Space into Something Extraordinary
                </Text>
                <Text style={styles.subtitle}>
                  Explore design ideas, get inspired, and connect with top-tier
                  professionals to bring your dream home to life.
                </Text>
              </View>
            </View>
          </View>
        </View>
      ),
    },

    {
      key: 'on2',
      render: () => (
        <View style={styles.wrapper}>
          <SkipButton />

          <View style={styles.screen}>
            <View style={styles.centerContent}>
              <View style={styles.titleWrap}>
                <Text style={styles.title}>
                  Plumbers, Electricians & More — All Nearby
                </Text>
                <Text style={styles.subtitle}>
                  Need a quick fix or a major upgrade? Find trusted local
                  experts for every job, big or small, right when you need them.
                </Text>
              </View>
            </View>
          </View>
        </View>
      ),
    },

    {
      key: 'on3',
      render: () => (
        <View style={styles.wrapper}>
          <SkipButton />

          <View style={styles.screen}>
            <View style={styles.centerContent}>
              <View style={styles.titleWrap}>
                <Text style={styles.title}>
                  Book Home Services, All in One App
                </Text>
                <Text style={styles.subtitle}>
                  From design to delivery — compare reviews, chat with pros, and
                  book your next project hassle-free.
                </Text>
              </View>
            </View>
          </View>
        </View>
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          data={DATA}
          ref={flatListRef}
          keyExtractor={item => item.key}
          onMomentumScrollEnd={e => {
            const index = Math.round(e.nativeEvent.contentOffset.x / width);
            setCurrentIndex(index);
          }}
          renderItem={({ item }) => (
            <View style={styles.slide}>{item.render()}</View>
          )}
        />
      </View>

      <View style={styles.bottom}>
        <ProgressDot total={DATA.length} current={currentIndex} />
        <GradientButton title="Next" onPress={handleNext} />
      </View>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: theme.background,
    justifyContent: 'flex-end',
  },

  wrapper: {
    flex: 1,
  },

  slide: {
    width,
    height,
  },

  screen: {
    flex: 1,
    padding: theme.xl,
    justifyContent: 'flex-end',
    paddingBottom: theme.dll,
  },

  centerContent: {
    alignItems: 'center',
  },

  titleWrap: {
    marginBottom: theme.dl,
  },

  title: {
    fontSize: 30,
    fontWeight: '400',
  },

  subtitle: {
    fontSize: 16,
    color: theme.textSecondary,
    marginTop: theme.sm,
    marginBottom: theme.xl,
  },

  row: {
    flexDirection: 'row',
    gap: theme.sm,
    marginTop: theme.sm,
  },

  bottom: {
    position: 'absolute',
    bottom: theme.xxxl,
    left: theme.xl,
    right: theme.xl,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
