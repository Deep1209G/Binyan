import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/screens/SplashScreen";
import OnBoardingScreen from "./src/screens/Onboarding/OnBoardingScreen";
import SignUpScreen from "./src/screens/Login/SignUpScreen";
import SignInScreen from "./src/screens/Login/SignInScreen";
import BottomTabs from "./src/components/Tab/BottomTabs";

export type RootStackParamList = {
  Splash: undefined,
  Language: undefined,
  AccountType: undefined,
  ServiceProvider:undefined,
  OnBoardingScreen1:undefined,
  OnBoardingScreen2:undefined,
  OnBoardingScreen3:undefined,
  SignIn: undefined,
  OnBoardingFlow: undefined,
  MainTabs: undefined,
  SignUp: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="OnBoardingFlow" component={OnBoardingScreen}/>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="MainTabs" component={BottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;