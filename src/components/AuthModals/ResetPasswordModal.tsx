import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import theme from '../../theme';

import Button from '../Button';
import PressableIcon from '../Home/PressableIcon';
import CustomTextInput from '../CutomTextInput';

type Props = {
  visible: boolean;
  onClose: () => void;
  onReset: () => void;
};

const ResetPasswordModal = ({
  visible,
  onClose,
  onReset,
}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={styles.centeredView}>
        <View style={styles.resetModalView}>

          <PressableIcon
            name="close-outline"
            size={25}
            onPress={onClose}
            style={styles.backbtn}
          />

          <Text style={styles.modaltitle}>
            Reset Password
          </Text>

          <Text style={styles.modalsubtitle}>
            No worries, we’ll send you reset instructions
          </Text>

          <CustomTextInput
            style={styles.resetModalInputupper}
            icon={
              <Icon
                name="key-outline"
                size={20}
                color={theme.colors.black}
              />
            }
            placeholder="Password"
            rightIcon={
              <Icon
                name="eye-outline"
                size={20}
                color={theme.colors.black}
              />
            }
          />

          <CustomTextInput
            style={styles.resetModalInputlower}
            icon={
              <Icon
                name="key-outline"
                size={20}
                color={theme.colors.black}
              />
            }
            placeholder="Confirm Password"
            rightIcon={
              <Icon
                name="eye-outline"
                size={20}
                color={theme.colors.black}
              />
            }
          />

          <Button
            onPress={onReset}
            title=" Reset Password"
            stylebtn={styles.resetmodalbtn}
            styleText={styles.btntext}
          />

        </View>
      </View>
    </Modal>
  );
};

export default ResetPasswordModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.transparent,
  },

  resetModalView: {
    padding: theme.spacing.lg,
    height: 340,
    width: 343,
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

  resetModalInputupper: {
    marginTop: theme.spacing.xxl,
    height: 46,
    width: 322,
    borderRadius: theme.radius.sm,
    alignSelf: 'center',
  },

  resetModalInputlower: {
    marginTop: theme.spacing.sm,
    height: 46,
    width: 322,
    borderRadius: theme.radius.sm,
    alignSelf: 'center',
  },

  resetmodalbtn: {
    alignSelf: 'center',
    marginTop: theme.spacing.xxxl,
    height: 46,
    width: 322,
  },

  btntext: {
    fontSize: theme.typography.medium,
  },
});