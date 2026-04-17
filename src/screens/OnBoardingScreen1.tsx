import React from 'react';
import OnboardingTemplate from '../components/OnBoardingTemplate';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "OnBoardingScreen1">;
}

const OnBoardingScreen1 = ({ navigation }: Props) => {
  return (
    <OnboardingTemplate
      title="Turn Your Space into Something Extraordinary"
      subtitle="Explore design ideas, get inspired, and connect with top-tier professionals to bring your dream home to life."
      currentStep={3}
      totalSteps={6}
      onNext={() => navigation.navigate("OnBoardingScreen2")}
    />
  );
};

export default OnBoardingScreen1;