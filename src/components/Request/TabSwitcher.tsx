import React, { useState } from 'react'; 
import { useNavigation } from '@react-navigation/native';
import theme from '../../theme';
import LinearGradient from 'react-native-linear-gradient';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const TabSwitcher = () => {
  const [activeTab, setActiveTab] = useState<'private' | 'public'>('private');
  const navigation = useNavigation<any>();

  const handlePress = (tab: 'private' | 'public') => {
    setActiveTab(tab);
    
    if (tab === 'private') {
      navigation.navigate('PrivateRequest'); 
    } else {
      navigation.navigate('PublicRequest');
    }
  };

  return (
    <View style={styles.container}>
      {/* Private Tab */}
      <Pressable onPress={() => handlePress('private')}>
        <LinearGradient
          colors={activeTab === 'private' ? theme.gradient : ['transparent', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.btn, activeTab === 'private' && styles.selectedBtn]}
        >
          <Text style={{ color: activeTab === 'private' ? theme.colors.white : theme.colors.textPrimary }}>
            Private Requests
          </Text>
        </LinearGradient>
      </Pressable>

      {/* Public Tab */}
      <Pressable onPress={() => handlePress('public')}>
        <LinearGradient
          colors={activeTab === 'public' ? theme.gradient : ['transparent', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.btn, activeTab === 'public' && styles.selectedBtn]}
        >
          <Text style={{ color: activeTab === 'public' ? theme.colors.white : theme.colors.textPrimary }}>
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
