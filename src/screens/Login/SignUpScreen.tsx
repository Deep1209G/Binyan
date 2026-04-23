import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import theme from '../../theme';
import CustomTextInput from '../../components/CutomTextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import GradientButton from '../../components/GradientButton';
import SocialIconButton from '../../components/SocialIconButton';
import LinkText from '../../components/LinkText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal';
import Checkbox from '../../components/CheckBox';

const SignInScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [countryCode, setCountryCode] = useState<CountryCode>('AE');
  const [callingCode, setCallingCode] = useState<string>('971');
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/BinyanText.png')} />
      </View>

      <Text style={styles.title}>Sign up</Text>

      {/* Name */}

      <View style={styles.inputContainer}>
        <CustomTextInput
          icon={
            <Icon name="person-outline" size={20} color={theme.colors.black} />
          }
          placeholder="First Name"
        />

        {/* Password */}

        <CustomTextInput
          icon={
            <Icon name="key-outline" size={20} color={theme.colors.black} />
          }
          placeholder="Password"
        />

        {/* Email */}

        <CustomTextInput
          icon={
            <Icon name="mail-outline" size={20} color={theme.colors.black} />
          }
          placeholder="Email"
        />

        {/* Phone Input */}

        <CustomTextInput
          placeholder="Phone no"
          keyboardType="phone-pad"
          prefix={
            <TouchableOpacity
              style={styles.prefixContainer}
              onPress={() => setVisible(true)}
            >
              {/* ▼ Arrow */}
              <Icon
                name="chevron-down-outline"
                size={16}
                style={styles.dropdownIcon}
              />

              {/* +971 */}
              <Text style={styles.codeText}>+{callingCode}</Text>
            </TouchableOpacity>
          }
        />

        {visible && (
          <CountryPicker
            countryCode={countryCode}
            withFilter
            withFlag={false}
            withCallingCode={false}
            withEmoji={false}
            visible={visible}
            onClose={() => setVisible(false)}
            onSelect={country => {
              setCountryCode(country.cca2);
              setCallingCode(country.callingCode[0]);
            }}
          />
        )}
      </View>

      {/*Sign Up Button */}

      <GradientButton
        title="Sign Up"
        onPress={() => navigation.navigate('SignIn')}
        style={styles.btn}
        textStyle={styles.btnText}
      />

      {/*Terms */}

      <View style={styles.termsContainer}>
        <Checkbox />
        <Text style={styles.termsTitle}>If you continue, you agree to the</Text>

        <LinkText
          title="Terms of Service"
          style={styles.termsText}
          onPress={() => console.log('Terms of Service')}
        />
      </View>

      {/*Policy */}

      <View style={styles.policyContainer}>
        <Checkbox />
        <Text style={styles.policyTitle}>
          If you continue, you agree to the
        </Text>

        <LinkText
          title="Privacy Policy"
          style={styles.policyText}
          onPress={() => console.log('Privacy Policy')}
        />
      </View>

      {/*Already have a account */}

      <View style={styles.loginContainer}>
        <Text style={styles.loginTitle}>Already have an account? </Text>
        <LinkText
          title="Log in!"
          style={styles.loginText}
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>

      {/*Or */}

      <View style={styles.containerOr}>
        <View style={styles.line} />
        <Text style={styles.textOR}>OR</Text>
        <View style={styles.line} />
      </View>

      {/*Social Icon Button */}

      <View style={styles.socailBtn}>
        <SocialIconButton name="apple" style={styles.scoialIconApple} />

        <SocialIconButton name="google" style={styles.scoialIconGoogle} />

        <SocialIconButton name="facebook" style={styles.scoialIconFacebook} />
      </View>

      {/*Continue as a Guest */}

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

  prefixContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingRight: theme.spacing.sm,
    marginRight: theme.spacing.sm,
  },

  codeText: {
    marginLeft: theme.spacing.xs,
    fontSize: theme.typography.medium,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.medium,
  },

  dropdownIcon: {
    marginLeft: theme.spacing.xs,
    color: theme.colors.textSecondary,
  },

  btn: {
    height: 60,
    width: '100%',
    marginTop: theme.spacing.md,
  },

  btnText: {
    fontSize: theme.typography.medium,
  },

  loginContainer: {
    flexDirection: 'row',
    marginTop: theme.spacing.xxl,
    justifyContent: 'center',
  },

  loginTitle: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.medium,
  },

  loginText: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.medium,
    marginLeft: theme.spacing.sm,
    fontWeight: theme.fontWeight.medium,
  },

  termsContainer: {
    flexDirection: 'row',
    marginTop: theme.spacing.xxl,
    justifyContent: 'center',
  },

  termsTitle: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.regular,
  },

  termsText: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.regular,
    marginLeft: theme.spacing.sm,
    fontWeight: theme.fontWeight.medium,
    textDecorationLine: 'underline',
  },

  policyContainer: {
    flexDirection: 'row',
    marginTop: theme.spacing.sm,
    justifyContent: 'center',
  },

  policyTitle: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.regular,
  },

  policyText: {
    color: theme.colors.black,
    fontSize: theme.typography.regular,
    marginLeft: theme.spacing.sm,
    fontWeight: theme.fontWeight.medium,
    textDecorationLine: 'underline',
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
    marginTop: theme.spacing.xxl,
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
