import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import BottomTabs from './src/components/Tab/BottomTabs';
import ServiceScreen from './src/screens/Tabs/ServiceScreen';
import ContractorListScreen from './src/screens/Contractor/ContractorListScreen';


export type RootStackParamList = {
  Splash: undefined;
  Language: undefined;
  AccountType: undefined;
  ServiceProvider: undefined;
  OnBoardingScreen1: undefined;
  OnBoardingScreen2: undefined;
  OnBoardingScreen3: undefined;
  SignIn: undefined;
  OnBoardingFlow: undefined;
  MainTabs: undefined;
  SignUp: undefined;
  Service: undefined;
  ContractorList: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="OnBoardingFlow" component={OnBoardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="MainTabs" component={BottomTabs} />
        <Stack.Screen name="Service" component={ServiceScreen} />
        <Stack.Screen name="ContractorList" component={ContractorListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
