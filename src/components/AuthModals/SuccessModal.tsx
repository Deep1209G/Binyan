import React from 'react';
import { Modal, View, Text, StyleSheet, Image } from 'react-native';

import theme from '../../theme';
import Images from '../../assets/images/image';
import Button from '../Button';
import PressableIcon from '../Home/PressableIcon';
import { DeviceHelper } from '../../utils/DeviceHelper';

type Props = {
  visible: boolean;
  onClose: () => void;
};

const SuccessModal = ({
  visible,
  onClose,
}: Props) => {
  return (
    <Modal animationType="slide" transparent visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <PressableIcon
            name="close-outline"
            size={25}
            onPress={onClose}
            style={styles.backbtn}
          />

          <Image
            source={Images.successfull}
            style={styles.image}
          />

          <Text style={styles.modaltitle}>Successful!</Text>

          <Text style={styles.baseText}>
             <Text style={styles.boldText}>Deep!{' '}</Text> 
             You nailed it, You successfully reset password for you account. 
          </Text>

          <Button
            title="Go to Login"
            onPress={onClose}
            stylebtn={styles.modalbtn}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.transparent,
  },

  modalView: {
    height: 340,
    width: DeviceHelper.calWidth(343),
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.winterSky ,
    borderRadius: theme.radius.md,
  },

  backbtn: {
    alignSelf: 'flex-end',
  },

  image: {
    alignSelf: 'center',
  },

  modaltitle: {
    textAlign: 'center',
    marginTop: theme.spacing.lg,
    fontSize: theme.typography.dl,
  },

  baseText: {
    textAlign: 'center',
    marginTop: theme.spacing.md,
    color: theme.colors.textSecondary,
  },
   boldText: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fontFamily.bold,
  },

  modalbtn: {
    alignSelf: 'center',
    marginTop: theme.spacing.xxxl,
    height: 46,
    width: DeviceHelper.calWidth(322),
  },
});