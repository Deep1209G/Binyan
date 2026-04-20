import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import theme from '../theme';
import CustomTextInput from '../components/CutomTextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import GradientButton from '../components/GradientButton';

const LoginScreen = () => {
   const handleSignIn = () =>{

   }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/BinyanText.png')} />
      </View>

      <Text style={styles.title}>Sign in</Text>

      <CustomTextInput
        icon={<Icon name="mail-outline" size={18} color={theme.black} />}
        placeholder="Email Address or phone number"
      />

      <CustomTextInput
        icon={<Icon name="key-outline" size={18} color={theme.black} />}
        placeholder="Password"
        rightIcon={<Icon name="eye-outline" size={18} color={theme.black} />}
      />

      <Pressable>
        <Text>Forgot password?</Text>
      </Pressable>
      
      <GradientButton
      title="Sign in" 
      onPress={handleSignIn}
       style={styles.btn}
       textStyle={styles.text}/>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {},

  logo: {
    alignItems: 'center',
    marginTop: theme.dl,
  },

  title: {},
  btn:{
    height:60,
    width: '100%',
  },

  text:{
    fontSize:15,
  },
});
