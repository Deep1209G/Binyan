import React from 'react';
import { Modal, View, Text, Image,StyleSheet } from 'react-native';

import Images from '../../assets/images/image';
import Button from '../Button';
import PressableIcon from '../Home/PressableIcon';

import theme from '../../theme';
import { DeviceHelper } from '../../utils/DeviceHelper';

type Props = {
  visible: boolean;
  onClose: () => void;
  onOkay: () => void;
};

const CheckEmailModal = ({
  visible,
  onClose,
  onOkay,
}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalViewEmail}>

          <View style={styles.header}>
            <Image
              source={Images.emaillogo}
              style={styles.emaillogo}
            />

            <PressableIcon
              name="close-outline"
              size={25}
              onPress={onClose}
              style={styles.closeIcon}
            />
          </View>

          <Text style={styles.modaltitle}>
            Open your email
          </Text>

          <Text style={styles.baseText}>
            We send you email to{' '}
            <Text style={styles.boldText}>
              “abc@gmail.com”
            </Text>{' '}
            Please check that.
          </Text>

          <Button
            title="Okay"
            onPress={onOkay}
            stylebtn={styles.modalemailbtn}
            styleText={styles.btntext}
          />

        </View>
      </View>
    </Modal>
  );
};

export default CheckEmailModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.transparent,
  },

    modalViewEmail: {
    padding: theme.spacing.lg,
    height: 272,
    width: DeviceHelper.calWidth(282),
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  closeIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
  },

  emaillogo: {
    marginTop: theme.spacing.xl,
  },


  modaltitle: {
    marginTop: theme.spacing.xl,
    alignSelf: 'center',
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.typography.dl,
  },

  baseText: {
    marginTop: theme.spacing.md,
    fontSize: theme.typography.regular,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },

 boldText: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fontFamily.bold,
  },

  modalemailbtn: {
    alignSelf: 'center',
    marginTop: theme.spacing.lg,
    height: 46,
    width: DeviceHelper.calWidth(254),
  },

  btntext: {
    fontSize: theme.typography.medium,
  },
});

