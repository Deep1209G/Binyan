import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PressableIcon from '../Home/PressableIcon';
import theme from '../../theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

type ServiceProp = {
  title: string;
};

const Header = ({ title }: ServiceProp) => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      {/* LEFT */}
      <View style={styles.side}>
        <PressableIcon
          name="arrow-back-outline"
          size={25}
          onPress={() => navigation.navigate('MainTabs')}
        />
      </View>

      {/* CENTER */}
      <View style={styles.center}>
        <Text style={styles.title}>{title}</Text>
      </View>

      {/* RIGHT */}
      <View style={styles.side} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  side: {
    flex: 1,
  },

  center: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    fontSize: theme.typography.xl,
    color: theme.colors.textPrimary,
    fontFamily: theme.fontFamily.medium,
  },
});
