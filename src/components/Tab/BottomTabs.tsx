import React from 'react';
import { Pressable, StyleProp, ViewStyle } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { RouteProp } from '@react-navigation/native';

// Components & Theme
import HomeScreen from '../../screens/Tabs/HomeScreen';
import DesignScreen from '../../screens/Tabs/DesignScreen';
import RequestScreen from '../../screens/Tabs/RequestScreen';
import ProfileScreen from '../../screens/Tabs/ProfileScreen';
import theme from '../../theme';

type TabParamList = {
  Home: undefined;
  Design: undefined;
  Requests: undefined;
  Profile: undefined;
};

interface BottomTabIconProps {
  color: string;
  size: number;
  focused: boolean;
}

const getTabIcon =
  (route: RouteProp<TabParamList>) =>
  ({ focused, color, size }: BottomTabIconProps) => {
    let iconName = '';

    switch (route.name) {
      case 'Home':
        iconName = focused ? 'home' : 'home-outline';
        break;
      case 'Design':
        iconName = focused ? 'color-palette' : 'color-palette-outline';
        break;
      case 'Requests':
        iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
        break;
      case 'Profile':
        iconName = focused ? 'person' : 'person-outline';
        break;
    }

    return <Icon name={iconName} size={size} color={color} />;
  };

const TabBarButton = (props: any) => (
  <Pressable
    {...props}
    android_ripple={null}
    style={({ pressed: _pressed }) => [
      props.style as StyleProp<ViewStyle>,
      { opacity: 1 },
    ]}
  />
);

const Tab = createBottomTabNavigator<TabParamList>();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: getTabIcon(route),
        tabBarButton: TabBarButton, // Referenced here instead of defined inline
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Design" component={DesignScreen} />
      <Tab.Screen name="Requests" component={RequestScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;