import React from 'react';
import OnboardingTemplate from '../components/OnBoardingTemplate';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "OnBoardingScreen2">;
}

const OnBoardingScreen3 = ({ navigation }: Props) => {
  return (
    <OnboardingTemplate
      title="Book Home Services, All in One App"
      subtitle="From design to delivery — 
      compare reviews, chat with pros, and
       book your next project hassle-free."
      currentStep={5}
      totalSteps={6}
      onNext={() => navigation.navigate("Login")}
    />
  );
};

export default OnBoardingScreen3;