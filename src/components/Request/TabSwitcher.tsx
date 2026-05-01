import React from 'react';
import theme from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  activeTab: 'private' | 'public';
  onChange: (tab: 'private' | 'public') => void;
};

const TabSwitcher = ({ activeTab, onChange }: Props) => {
  return (
    <View style={styles.container}>
      {/* Private Tab */}
      <Pressable onPress={() => onChange('private')}>
        <LinearGradient
          colors={
            activeTab === 'private'
              ? theme.gradient
              : ['transparent', 'transparent']
          }
          style={styles.btn}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text
            style={{
              color:
                activeTab === 'private'
                  ? theme.colors.white
                  : theme.colors.textPrimary,
            }}
          >
            Private Requests
          </Text>
        </LinearGradient>
      </Pressable>

      {/* Public Tab */}
      <Pressable onPress={() => onChange('public')}>
        <LinearGradient
          colors={
            activeTab === 'public'
              ? theme.gradient
              : ['transparent', 'transparent']
          }
          style={styles.btn}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <Text
            style={{
              color:
                activeTab === 'public'
                  ? theme.colors.white
                  : theme.colors.textPrimary,
            }}
          >
            Public Requests
          </Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
};

export default TabSwitcher;

const styles = StyleSheet.create({
  container: {
    marginTop: theme.spacing.xxxl,
    marginBottom: theme.spacing.md,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.dl,
    height: 46,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 4,
  },

  btn: {
    height: 40,
    width: 170,
    borderRadius: theme.radius.dl,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  selectedBtn: {
    // Add shadow or specific border for selected state if needed
    elevation: 2,
  },
});
