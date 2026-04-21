import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import theme from '../theme';


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
      <Pressable onPress={handleSkip}>
        <Text style={styles.text}>Skip</Text>
      </Pressable>
    </View>
  );
};

export default SkipButton;

const styles = StyleSheet.create({
  wrap:{
    marginTop:theme.spacing.xxxl,
    marginLeft:theme.spacing.xl,
  },
 
  text: {
    color: theme.colors.primary,
    fontSize: 20,
  },
});
