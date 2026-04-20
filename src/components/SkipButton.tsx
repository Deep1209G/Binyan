import { StyleSheet, Text, View, Pressable } from 'react-native';
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
    <View style = {styles.wrap}>
      <Pressable style={styles.button} onPress={handleSkip}>
        <Text style={styles.text}>Skip</Text>
      </Pressable>
    </View>
  );
};

export default SkipButton;

const styles = StyleSheet.create({
  wrap:{
    marginTop:30,
    marginLeft:20,
  },
  button: {},

  text: {
    color: '#ff7a00',
    fontSize: 20,
  },
});
