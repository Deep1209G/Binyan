import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/screens/SplashScreen";
import LanguageScreen from "./src/screens/LanguageScreen";
import AccountTypeScreen from "./src/screens/AccountTypeScreen";
import ServiceProviderScreen from "./src/screens/ServiceProviderScreen";
import OnBoardingScreen1 from "./src/screens/OnBoardingScreen1";
import OnBoardingScreen2 from "./src/screens/OnBoardingScreen2";
import OnBoardingScreen3 from "./src/screens/OnBoardingScreen3";
import LoginScreen from "./src/screens/LoginScreen";
import OnBoardingFlow from "./src/screens/OnBoardingFlow";

export type RootStackParamList = {
  Splash: undefined,
  Language: undefined,
  AccountType: undefined,
  ServiceProvider:undefined,
  OnBoardingScreen1:undefined,
  OnBoardingScreen2:undefined,
  OnBoardingScreen3:undefined,
  Login: undefined,
  OnBoardingFlow: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Language" component={LanguageScreen}  />
        <Stack.Screen name="AccountType" component={AccountTypeScreen}  />
        <Stack.Screen name="ServiceProvider" component={ServiceProviderScreen} />
        <Stack.Screen name="OnBoardingScreen1" component={OnBoardingScreen1}/>
        <Stack.Screen name="OnBoardingScreen2" component={OnBoardingScreen2}/>
        <Stack.Screen name="OnBoardingScreen3" component={OnBoardingScreen3}/>
        <Stack.Screen name="OnBoardingFlow" component={OnBoardingFlow}/>
        <Stack.Screen name="Login" component={LoginScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;