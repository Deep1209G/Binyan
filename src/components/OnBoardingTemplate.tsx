import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import SkipButton from './SkipButton';
import ProgressDot from './ProgressDot';
import GradientButton from './GradientButton';

interface OnboardingTemplateProps {
  title: string;
  subtitle: string;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
}

const OnboardingTemplate = ({
  title,
  subtitle,
  currentStep,
  totalSteps,
  onNext,
}: OnboardingTemplateProps) => {
  return (
    <View style={styles.root}>
      {/* Top Header */}
      <View style={styles.header}>
        <SkipButton />
      </View>

      {/* Content Container */}
      <View style={styles.container}>
        <View style={styles.textWrapper}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>

        {/* Bottom Navigation */}
        <View style={styles.bottom}>
          <ProgressDot total={totalSteps} current={currentStep} />
          <GradientButton title="Next" onPress={onNext} />
        </View>
      </View>
    </View>
  );
};

export default OnboardingTemplate;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Pushes content to bottom
    paddingHorizontal: 25,
    paddingBottom: 30,
  },
  textWrapper: {
    marginBottom: 40, // Space between text and dots
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: '#1A1A1A',
    lineHeight: 40,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    color: '#707070',
    lineHeight: 24,
    marginBottom: 30,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
