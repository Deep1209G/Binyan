import { StyleSheet, View } from 'react-native';
import React from 'react';
import theme from '../../theme';
import PressableIcon from '../Home/PressableIcon';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.jack}>
        <PressableIcon
          name="notifications-outline"
          size={20}
          onPress={() => console.log('Notification')}
        />

        <PressableIcon
          name="flower-outline"
          size={20}
          onPress={() => console.log('Setting')}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mutedgrayishtaupe,
    height: 210,
    borderBottomRightRadius: theme.radius.lg,
    borderBottomLeftRadius: theme.radius.lg,
    
  },

  jack:{
   flexDirection:'row',
   justifyContent:'flex-end',
   marginTop:theme.spacing.xxxl,
   marginRight:theme.spacing.sm,
   gap:theme.spacing.xs,
  },

});
