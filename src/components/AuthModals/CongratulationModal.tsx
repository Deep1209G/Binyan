import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import theme from '../../theme';
import Images from '../../assets/images/image';
import PressableIcon from '../Home/PressableIcon';
import Button from '../Button';
import { DeviceHelper } from '../../utils/DeviceHelper';

type CongratulationModalProps = {
  visible: boolean;
  onClose: () => void;
  onLogin: () => void;
};

const CongratulationModal = ({
  visible,
  onClose,
  onLogin,
}: CongratulationModalProps) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          
          <PressableIcon
            name="close-outline"
            size={25}
            onPress={onClose}
            style={styles.backbtn}
          />

          <Image
            source={Images.congratulation}
            style={styles.congicon}
          />

          <Text style={styles.modaltitle}>
            Congratulations!
          </Text>

          <Text style={styles.modalsubtitle}>
            You have successfully created account.
            Let’s start a memorable journey with us
          </Text>

          <Button
            onPress={onLogin}
            title="Let’s Go"
            stylebtn={styles.modalbtn}
            styleText={styles.btntext}
          />

        </View>
      </View>
    </Modal>
  );
};

export default CongratulationModal;

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

  congicon: {
    alignSelf: 'center',
  },

  modalsubtitle: {
    marginTop: theme.spacing.lg,
    textAlign: 'center',
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.typography.regular,
    color: theme.colors.mutedbluegray,
  },

  modaltitle: {
    marginTop: theme.spacing.xl,
    alignSelf: 'center',
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.typography.dl,
  },

  modalbtn: {
    alignSelf: 'center',
    marginTop: theme.spacing.xxl,
    height: 46,
    width: DeviceHelper.calWidth(322),
  },

  btntext: {
    fontSize: theme.typography.medium,
  },
});