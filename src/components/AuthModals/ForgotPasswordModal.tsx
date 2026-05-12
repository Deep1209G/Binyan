import React from 'react';
import { Modal, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import theme from '../../theme';
import CustomTextInput from '../CutomTextInput';
import Button from '../Button';
import LinkText from '../LinkText';
import PressableIcon from '../Home/PressableIcon';
import { DeviceHelper } from '../../utils/DeviceHelper';

type ForgetPasswordModalProps = {
  visible: boolean;
  onClose: () => void;
  onReset: () => void;
};

const ForgetPasswordModal = ({
  visible,
  onClose,
  onReset,
}: ForgetPasswordModalProps) => {
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

          <Text style={styles.modaltitle}>Forget Password</Text>

          <Text style={styles.modalsubtitle}>
            No worries, we’ll send you reset instructions
          </Text>

          <CustomTextInput
            style={styles.modalInput}
            icon={
              <Icon name="mail-outline" size={20} color={theme.colors.black} />
            }
            placeholder="Email"
          />

          <Button
            onPress={onReset}
            title=" Reset Password"
            stylebtn={styles.modalbtn}
            styleText={styles.btntext}
          />

          <View style={styles.modalbottom}>
            <Text style={styles.modalText1}>Remember Password?</Text>

            <LinkText
              title="Log in!"
              style={styles.modalText2}
              onPress={onClose}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ForgetPasswordModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.transparent,
  },

  modalView: {
    padding: theme.spacing.lg,
    width: DeviceHelper.calWidth(343),
    height: 317,
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

  modalsubtitle: {
    marginTop: theme.spacing.sm,
    textAlign: 'center',
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.typography.regular,
    color: theme.colors.mutedbluegray,
  },

  modalInput: {
    marginTop: theme.spacing.xxl,
    width: DeviceHelper.calWidth(322),
    height: 46,
    borderRadius: theme.radius.sm,
    alignSelf: 'center',
  },

  modalbtn: {
    alignSelf: 'center',
    marginTop: theme.spacing.xxl,
    width: DeviceHelper.calWidth(322),
    height: 46,
  },

  btntext: {
    fontSize: theme.typography.medium,
  },

  modalbottom: {
    marginTop: theme.spacing.xl,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalText1: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.typography.regular,
    color: theme.colors.textSecondary,
  },

  modalText2: {
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.typography.regular,
    color: theme.colors.textPrimary,
  },
});
