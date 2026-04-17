import React from 'react';
import OnboardingTemplate from '../components/OnBoardingTemplate';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

interface Props {
  navigation: NativeStackNavigationProp<RootStackParamList, "OnBoardingScreen2">;
}

const OnBoardingScreen2 = ({ navigation }: Props) => {
  return (
    <OnboardingTemplate
      title="Plumbers, Electricians & More — All Nearby"
      subtitle="Need a quick fix or a major upgrade? Find trusted 
      local experts for every job, big or small, right when you need 
      them."
      currentStep={4}
      totalSteps={6}
      onNext={() => navigation.navigate("OnBoardingScreen3")}
    />
  );
};

export default OnBoardingScreen2;