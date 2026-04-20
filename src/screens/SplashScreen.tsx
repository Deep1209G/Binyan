import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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
      colors={['#e09951', '#ff7a00', '#c70039']}
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
  },
  logo: {
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 7,
    color: '#fff',
    opacity: 0.8,
    marginTop: 5,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});
