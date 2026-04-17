import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import SelectableItem from '../components/SelectableItem';
import Icon from 'react-native-vector-icons/Ionicons';
import ProgressDot from '../components/ProgressDot';
import GradientButton from '../components/GradientButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

interface LanguageScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "AccountType">;
}

const AccountTypeScreen = ({navigation}:LanguageScreenProps) => {
  const [accountType, setAccountType] = React.useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Account Type</Text>
      <Text style={styles.subtitle}>Tell us who you are, so we can personalize your 
        experience. You can always update this later in settings.
      </Text>

      <View>
        <SelectableItem 
        icon = {<Icon name="person" size={15} color="#FF6A00"/>}
        label="Individual"
        selected={accountType === "Individual"}
        onPress={() => setAccountType("Individual")}
        showLine={true}
        />

        <SelectableItem 
        icon = {<Icon name="people" size={15} color="#FF6A00"/>}
        label="Organization"
        selected={accountType === "Organization"}
        onPress={() => setAccountType("Organization")}
        showLine={true}
        />

         <SelectableItem 
        icon = {<Icon name="settings" size={15} color="#FF6A00"/>}
        label="Service Provider"
        selected={accountType === "Service Provider"}
        onPress={() => setAccountType("Service Provider")}
        showLine={true}
        />
      </View>

      <View style={styles.bottom}>
        <ProgressDot 
         total={6} current={1}
        />
        <GradientButton 
        title="Next"
        onPress={() => navigation.navigate("ServiceProvider")}
        />

      </View>

    </View>
  );
};

export default AccountTypeScreen;

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: "#FFFFFF",
      padding: 20,
      justifyContent: "flex-end",

    },

    title:{
        fontSize:28,
        fontWeight:400,

    },
    subtitle:{
            fontSize: 15,
            color: "gray",
            marginTop:15,
            marginBottom: 20,
    },
    bottom:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:15,
        marginBottom:15,
    },


})