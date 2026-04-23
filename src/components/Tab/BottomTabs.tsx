import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/Tabs/HomeScreen';
import DesignScreen from '../../screens/Tabs/DesignScreen';
import RequestScreen from '../../screens/Tabs/RequestScreen';
import ProfileScreen from '../../screens/Tabs/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { RouteProp } from '@react-navigation/native';
import theme from '../../theme';

type TabParamList = {
  Home: undefined;
  Design: undefined;
  Requests: undefined;
  Profile: undefined;
};

interface BottomTabProp {
  color: string;
  size: number;
  focused: boolean;
}

const Tab = createBottomTabNavigator<TabParamList>();
const getTabIcon =
  (route: RouteProp<TabParamList>) =>
  ({ focused, color, size }: BottomTabProp) => {
    let iconName = '';

    switch (route.name) {
      case 'Home':
        iconName = focused ? 'home' : 'home-outline';
        break;

      case 'Design':
        iconName = focused ? 'color-palette' : 'color-palette-outline';
        break;

      case 'Requests':
        iconName = focused
          ? 'chatbubble-ellipses'
          : 'chatbubble-ellipses-outline';
        break;

      case 'Profile':
        iconName = focused ? 'person' : 'person-outline';
        break;
    }

    return <Icon name={iconName} size={size} color={color} />;
  };

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: getTabIcon(route),
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        headerShown:false,
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


