import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import theme from '../theme';

interface SplashScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
}

const SplashScreen = ({ navigation }: SplashScreenProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnBoardingFlow');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <LinearGradient
      colors={theme.gradient}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <View style={styles.logoBox}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        <Text style={styles.title}>Binyan</Text>
        <Text style={styles.subtitle}>
          Built on Trust, Designed for the Future
        </Text>
      </View>
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBox: {
    alignItems: 'center',
     paddingHorizontal: theme.spacing.xl,
  },
  logo: {
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.sm,
    marginBottom: theme.spacing.sm,
  },
  title: {
    fontSize: 55,
    color: theme.colors.white,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 10,
    color: theme.colors.white,
    opacity: 0.8,
    marginTop: theme.spacing.xs,
    textAlign: 'center',
    paddingHorizontal: theme.spacing.xl,
  },
});
