import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/screens/SplashScreen";
import LoginScreen from "./src/screens/LoginScreen";
import OnBoardingScreen from "./src/screens/OnBoardingScreen";

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
        <Stack.Screen name="OnBoardingFlow" component={OnBoardingScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;