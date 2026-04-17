import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
};

const SkipButton = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const handleSkip = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handleSkip}>
        <Text style={styles.text}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SkipButton;

const styles = StyleSheet.create({
  button: {},

  text: {
    color: '#ff7a00',
    fontSize: 20,
  },
});
