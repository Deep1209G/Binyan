import { StyleSheet, View, FlatList, Text } from 'react-native';
import React, { useState } from 'react';
import SelectableItem from '../components/SelectableItem';
import Icon from 'react-native-vector-icons/Ionicons';

const OnBoardingFlow = () => {
  // States
 const [language, setLanguage] = useState<string>("English");
  const [accountType, setAccountType] = useState<string>("");
  const [serviceType, setServiceType] = useState<string >("");

  type ItemData = {
    render: () => React.ReactNode;
    key: string;
  };

  const DATA: ItemData[] = [

    // Language
    {
      key: 'language',
      render: () => (
        <>
          <Text style={styles.title}>Choose Your Language</Text>
          <Text style={styles.subtitle}>
            Select your preferred language to use go my go easy.
          </Text>

          {/* Options */}
          <View>
            <SelectableItem
              label="English"
              selected={language === 'English'}
              onPress={() => setLanguage('English')}
              showLine={true}
            />
            <SelectableItem
              label="Arabic"
              selected={language === 'Arabic'}
              onPress={() => setLanguage('Arabic')}
              showLine={true}
            />
          </View>
        </>
      ),
    },

    // Account Type
    {
      key: 'account',
      render: () => (
        <>
          <Text style={styles.title}>Choose Your Account Type</Text>
          <Text style={styles.subtitle}>
            Tell us who you are, so we can personalize your experience. You can
            always update this later in settings.
          </Text>

          <View>
            <SelectableItem
              icon={<Icon name="person" size={15} color="#FF6A00" />}
              label="Individual"
              selected={accountType === 'Individual'}
              onPress={() => setAccountType('Individual')}
              showLine={true}
            />

            <SelectableItem
              icon={<Icon name="people" size={15} color="#FF6A00" />}
              label="Organization"
              selected={accountType === 'Organization'}
              onPress={() => setAccountType('Organization')}
              showLine={true}
            />

            <SelectableItem
              icon={<Icon name="settings" size={15} color="#FF6A00" />}
              label="Service Provider"
              selected={accountType === 'Service Provider'}
              onPress={() => setAccountType('Service Provider')}
              showLine={true}
            />
          </View>
        </>
      ),
    },

    // Service Provider
    {
      key: 'service',
      render: () => (
        <>
          <View>
            <Text style={styles.title}>Are you a service provider?</Text>
            <Text style={styles.subtitle}>
              Choose how you'd like to continue.
            </Text>

            <View style={styles.row}>
              <SelectableItem
                variant="card"
                icon={<Icon name="person" size={16} color="#FF6A00" />}
                label="Browse Binyan"
                selected={serviceType === 'Browse Binyan'}
                onPress={() => setServiceType('Browse Binyan')}
              />

              <SelectableItem
                variant="card"
                icon={<Icon name="business" size={16} color="#FF6A00" />}
                label="Create a Profile"
                selected={serviceType === 'Create a Profile'}
                onPress={() => setServiceType('Create a Profile')}
              />
            </View>
          </View>
        </>
      ),
    },

    // Onboarding Screen 1
    {
      key: 'on1',
      render: () => (
        <>
          <Text style={styles.title}>
            Turn Your Space into Something Extraordinary
          </Text>
          <Text style={styles.subtitle}>
            Explore design ideas and connect with professionals.
          </Text>
        </>
      ),
    },

    // Onboarding Screen 2
    {
      key: 'on2',
      render: () => (
        <>
          <Text style={styles.title}>
            Plumbers, Electricians & More — All Nearby
          </Text>
          <Text style={styles.subtitle}>
            Find trusted local experts anytime.
          </Text>
        </>
      ),
    },

    // Onboarding Screen 3
    {
      key: 'on3',
      render: () => (
        <>
          <Text style={styles.title}>
            Plumbers, Electricians & More — All Nearby
          </Text>
          <Text style={styles.subtitle}>
            Find trusted local experts anytime.
          </Text>
        </>
      ),
    },
  ];

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <View>{item.render()}</View>}
      />
    </View>
  );
};

export default OnBoardingFlow;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 400,
  },
  subtitle: {
    fontSize: 15,
    color: 'gray',
    marginTop: 15,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
});


