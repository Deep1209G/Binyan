import React from 'react';
import { Modal, View, Text, TextInput, StyleSheet } from 'react-native';

import theme from '../../theme';

import Button from '../Button';
import LinkText from '../LinkText';
import PressableIcon from '../Home/PressableIcon';
import { DeviceHelper } from '../../utils/DeviceHelper';

type OtpModalProps = {
  visible: boolean;
  otp: string[];
  setOtp: (otp: string[]) => void;
  onClose: () => void;
  onConfirm: () => void;
};

const OtpModal = ({
  visible,
  otp,
  setOtp,
  onClose,
  onConfirm,
}: OtpModalProps) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <PressableIcon
            name="close-outline"
            size={25}
            onPress={onClose}
            style={styles.backbtn}
          />

          <Text style={styles.modaltitle}>Enter the code sent</Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                value={digit}
                onChangeText={text => {
                  const newOtp = [...otp];
                  newOtp[index] = text;
                  setOtp(newOtp);
                }}
                keyboardType="number-pad"
                maxLength={1}
                style={styles.otpInput}
              />
            ))}
          </View>

          <View style={styles.otpmodallower}>
            <Text style={styles.otpModalText1}>Confirmation code sent to </Text>

            <LinkText
              title={'abc@gmail.com'}
              style={styles.otpModalText2}
              onPress={() => {}}
            />
          </View>

          <View style={styles.otpmodalupper}>
            <Text style={styles.otpModalText1}>
              (1.47) - Don’t get the code?{' '}
            </Text>

            <LinkText
              title="Resend"
              style={styles.otpModalText2}
              onPress={() => console.log('Resend code')}
            />
          </View>

          <Button
            onPress={onConfirm}
            title="Confirm"
            stylebtn={styles.otpmodalbtn}
            styleText={styles.btntext}
          />
        </View>
      </View>
    </Modal>
  );
};

export default OtpModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.transparent,
  },

  modalView: {
    padding: theme.spacing.lg,
    height: 320,
    width: DeviceHelper.calWidth(343),
    backgroundColor: theme.colors.winterSky,
    borderRadius: theme.radius.md,
  },

  backbtn: {
    alignSelf: 'flex-end',
  },

  modaltitle: {
    marginTop: theme.spacing.sm,
    alignSelf: 'center',
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.typography.dl,
  },

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: theme.spacing.xl,
  },

  otpInput: {
    width: DeviceHelper.calWidth(55),
    height: 55,
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    textAlign: 'center',
    fontSize: theme.typography.xl,
    color: theme.colors.textPrimary,
    backgroundColor: theme.colors.white,
  },

  otpmodallower: {
    marginTop: theme.spacing.lg,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  otpmodalupper: {
    marginTop: theme.spacing.sm,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  otpModalText1: {
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.typography.regular,
    color: theme.colors.textSecondary,
  },

  otpModalText2: {
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.typography.regular,
    color: theme.colors.textPrimary,
  },

  otpmodalbtn: {
    alignSelf: 'center',
    marginTop: theme.spacing.xxl,
    height: 46,
    width: DeviceHelper.calWidth(322),
  },

  btntext: {
    fontSize: theme.typography.medium,
  },
});
