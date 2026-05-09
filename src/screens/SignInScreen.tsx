import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import theme from '../theme';
import CustomTextInput from '../components/CutomTextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import SocialIconButton from '../components/SocialIconButton';
import LinkText from '../components/LinkText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import Button from '../components/Button';
import ForgotPasswordModal from '../components/AuthModals/ForgotPasswordModal';
import OtpModal from '../components/AuthModals/OtpModal';
import CheckEmailModal from '../components/AuthModals/CheckEmailModal';
import ResetPasswordModal from '../components/AuthModals/ResetPasswordModal';
import SuccessModal from '../components/AuthModals/SuccessModal';

const SignInScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [modalVisible, setModalVisible] = useState(false);
  const [otpModalVisible, setOtpModalVisible] = useState(false);
  const [checkEmailModalVisible, setCheckEmailModalVisible] = useState(false);
  const [resetModalVisible, setResetModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const [otp, setOtp] = useState(['', '', '', '']);

  return (


    <View style={styles.container}>
      
      {/*Logo */}
      <View style={styles.logo}>
        <Image source={require('../assets/BinyanText.png')} />
      </View>

      {/*Title */}
      <Text style={styles.title}>Sign in</Text>

      {/*Mail */}
      <View style={styles.inputContainer}>
        <CustomTextInput
          icon={
            <Icon name="mail-outline" size={20} color={theme.colors.black} />
          }
          placeholder="Email Address or phone number"
        />

        {/*Password */}
        <CustomTextInput
          icon={
            <Icon name="key-outline" size={20} color={theme.colors.black} />
          }
          placeholder="Password"
          rightIcon={
            <Icon name="eye-outline" size={20} color={theme.colors.black} />
          }
        />
      </View>

      {/*Forgot Password */}

      <ForgotPasswordModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onReset={() => {
          setModalVisible(false);
          setOtpModalVisible(true);
        }}
      />

      {/*Otp Modal*/}
      <OtpModal
        visible={otpModalVisible}
        otp={otp}
        setOtp={setOtp}
        onClose={() => setOtpModalVisible(false)}
        onConfirm={() => {
          setCheckEmailModalVisible(true);
        }}
      />

      {/*Check Email Modal */}
      <CheckEmailModal
        visible={checkEmailModalVisible}
        onClose={() => {
          setCheckEmailModalVisible(false);
          setOtpModalVisible(false);
        }}
        onOkay={() => {
          setCheckEmailModalVisible(false);
          setOtpModalVisible(false);
          setResetModalVisible(true);
        }}
      />

      {/*Reset Password */}
      <ResetPasswordModal
        visible={resetModalVisible}
        onClose={() => setResetModalVisible(false)}
        onReset={() => {
          setResetModalVisible(false);
          setSuccessModalVisible(true);
        }}
      />

      {/*Success Modal */}
      <SuccessModal
        visible={successModalVisible}
        onClose={() => setSuccessModalVisible(false)}
      />

      <LinkText
        title="Forgot password?"
        style={styles.forgotPassword}
        onPress={() => setModalVisible(true)}
      />

      {/*Sign In Button */}
      <Button
        onPress={() => navigation.navigate('MainTabs')}
        title="Sign in"
        stylebtn={styles.btn}
        styleText={styles.btntext}
      />

      {/*Dont have account */}
      <View style={styles.signUpcontainer}>
        <Text style={styles.signUptitle}>Don't have an account?</Text>
        <LinkText
          title="Sign up!"
          style={styles.signUpText}
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>

      {/*Or with vertical line */}
      <View style={styles.containerOr}>
        <View style={styles.line} />
        <Text style={styles.textOR}>OR</Text>
        <View style={styles.line} />
      </View>

      {/*Socail Button */}
      <View style={styles.socailBtn}>
        <SocialIconButton name="apple" style={styles.scoialIconApple} />

        <SocialIconButton name="google" style={styles.scoialIconGoogle} />

        <SocialIconButton name="facebook" style={styles.scoialIconFacebook} />
      </View>

      {/*As a Guest*/}
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>Continue as </Text>

        <LinkText
          title="Guest"
          style={styles.guestText}
          onPress={() => navigation.navigate('MainTabs')}
        />
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.lg,
  },

  logo: {
    alignItems: 'center',
    marginTop: theme.spacing.xxxl,
  },

  title: {
    marginTop: theme.spacing.xl,
    fontSize: theme.typography.xl,
    color: theme.colors.black,
    fontWeight: theme.fontWeight.medium,
  },

  inputContainer: {
    marginTop: theme.spacing.xl,
    gap: theme.spacing.sm,
  },

  forgotPassword: {
    color: theme.colors.accent,
    marginTop: theme.spacing.md,
    alignSelf: 'flex-end',
    fontWeight: theme.fontWeight.medium,
  },

  btn: {
    height: 55,
    width: '100%',
    marginTop: theme.spacing.md,
    borderRadius: theme.radius.md,
  },

  btntext: {
    fontSize: theme.typography.medium,
  },

  signUpcontainer: {
    flexDirection: 'row',
    marginTop: theme.spacing.dll,
    justifyContent: 'center',
  },

  signUptitle: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.medium,
  },

  signUpText: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.medium,
    marginLeft: theme.spacing.sm,
    fontWeight: theme.fontWeight.medium,
    textDecorationLine: 'underline',
    textDecorationColor: 'black',
  },

  containerOr: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.xxxl,
  },

  textOR: {
    marginHorizontal: theme.spacing.lg,
    color: theme.colors.textSecondary,
    fontWeight: theme.fontWeight.medium,
    fontSize: theme.typography.medium,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.border,
  },

  socailBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.xxxl,
  },

  scoialIconApple: {
    width: 22,
    height: 24,
  },

  scoialIconGoogle: {
    width: 26,
    height: 24,
  },

  scoialIconFacebook: {
    width: 26,
    height: 26,
  },

  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  bottomText: {
    fontSize: theme.typography.xl,
    color: theme.colors.textSecondary,
  },
  guestText: {
    fontSize: theme.typography.xl,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.medium,
    textDecorationLine: 'underline',
  },
});
