import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../theme';
import CustomTextInput from '../components/CutomTextInput';
import Icon from 'react-native-vector-icons/Ionicons';
import SocialIconButton from '../components/SocialIconButton';
import LinkText from '../components/LinkText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import CountryPicker, { CountryCode } from 'react-native-country-picker-modal';
import Checkbox from '../components/CheckBox';
import Button from '../components/Button';
import CongratulationModal from '../components/AuthModals/CongratulationModal';
import { DeviceHelper } from '../utils/DeviceHelper';
import { signup } from '../api/apiService';

const SignUpScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [countryCode, setCountryCode] = useState<CountryCode>('AE');
  const [callingCode, setCallingCode] = useState<string>('971');
  const [visible, setVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignup = async () => {
    try {
      const res = await signup({
        name,
        email,
        password,
        phone,
      });

      console.log(res);

      if (res.message === 'Signup successful') {
        setModalVisible(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <View style={styles.logo}>
          <Image
            source={require('../assets/BinyanText.png')}
            style={{
              width: DeviceHelper.calWidth(184.61),
              height: DeviceHelper.calWidth(50.46),
            }}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>Sign up</Text>

        {/* Name */}

        <View style={styles.inputContainer}>
          <CustomTextInput
            style={{ borderRadius: theme.radius.md }}
            icon={
              <Icon
                name="person-outline"
                size={20}
                color={theme.colors.black}
              />
            }
            placeholder="First Name"
            value={name}
            onChangeText={setName}
          />

          {/* Password */}

          <CustomTextInput
            style={{ borderRadius: theme.radius.md }}
            icon={
              <Icon name="key-outline" size={20} color={theme.colors.black} />
            }
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {/* Email */}

          <CustomTextInput
            style={{ borderRadius: theme.radius.md }}
            icon={
              <Icon name="mail-outline" size={20} color={theme.colors.black} />
            }
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />

          {/* Phone Input */}

          <CustomTextInput
            style={{ borderRadius: theme.radius.md }}
            placeholder="Phone no"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
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

        {/*Sign Up Button  Modal*/}
        <CongratulationModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onLogin={() => navigation.navigate('SignIn')}
        />

        <Button
          onPress={handleSignup}
          title="Sign up"
          stylebtn={styles.btn}
          styleText={styles.btntext}
        />

        {/*Terms */}

        <View style={styles.termsContainer}>
          <Checkbox />
          <Text style={styles.termsTitle}>
            If you continue, you agree to the
          </Text>

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
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
  },
  scrollContainer: {
    flexGrow: 1,
  },

  logo: {
    alignItems: 'center',
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
    height: 55,
    width: '100%',
    borderRadius: theme.radius.md,
    marginTop: theme.spacing.md,
  },

  btntext: {
    fontSize: theme.typography.medium,
  },

  loginContainer: {
    flexDirection: 'row',
    marginTop: theme.spacing.xxl,
    justifyContent: 'center',
  },

  loginTitle: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.regular,
  },

  loginText: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.regular,
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
    fontSize: theme.typography.small,
  },

  termsText: {
    color: theme.colors.textPrimary,
    fontSize: theme.typography.small,
    marginLeft: theme.spacing.sm,
    fontWeight: theme.fontWeight.medium,
  },

  policyContainer: {
    flexDirection: 'row',
    marginTop: theme.spacing.sm,
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },

  policyTitle: {
    flexShrink: 1,
    color: theme.colors.textSecondary,
    fontSize: theme.typography.small,
  },

  policyText: {
    color: theme.colors.black,
    fontSize: theme.typography.small,
    marginLeft: theme.spacing.sm,
    fontWeight: theme.fontWeight.medium,
  },

  containerOr: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.xxxl,
  },

  textOR: {
    marginHorizontal: theme.spacing.lg,
    color: theme.colors.textSecondary,
    fontWeight: theme.fontWeight.regular,
    fontSize: theme.typography.regular,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.border,
  },

  socailBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing.xxl,
  },

  scoialIconApple: {
    width: DeviceHelper.calWidth(20),
    height: DeviceHelper.calHeight(18),
  },

  scoialIconGoogle: {
    height: DeviceHelper.calHeight(22),
    width: DeviceHelper.calWidth(20),
  },

  scoialIconFacebook: {
    width: DeviceHelper.calWidth(22),
    height: DeviceHelper.calHeight(22),
  },

  bottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    paddingTop: theme.spacing.xxxl,
    paddingBottom: theme.spacing.md,
  },
  bottomText: {
    fontSize: theme.typography.xl,
    color: theme.colors.textSecondary,
    fontFamily: theme.fontFamily.medium,
  },
  guestText: {
    fontSize: theme.typography.xl,
    color: theme.colors.textPrimary,
    fontFamily: theme.fontFamily.medium,
  },
});
