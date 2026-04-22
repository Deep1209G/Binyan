import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/screens/SplashScreen";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SignInScreen from "./src/screens/SignInScreen";

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
  Home: undefined,
  SignUp: undefined,
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="OnBoardingFlow" component={OnBoardingScreen}/>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;