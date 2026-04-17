import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import GradientButton from "../components/GradientButton";
import SelectableItem from "../components/SelectableItem";
import ProgressDot from "../components/ProgressDot";
import { RootStackParamList } from "../../App";

interface LanguageScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Language">;
}

const LanguageScreen = ({navigation}:LanguageScreenProps) => {
  const [language, setLanguage] = useState<string>("English");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Your Language</Text>
      <Text style={styles.subtitle}>
        Select your preferred language to use go my go easy.
      </Text>

      {/* Options */}
      <View>
        <SelectableItem 
        label="English"
        selected={language === "English"}
        onPress={() => setLanguage("English")}
        showLine={true}
        
        />
        <SelectableItem
          label="Arabic"
          selected={language === "Arabic"}
          onPress={() => setLanguage("Arabic")}
          showLine={true}
        />
      </View>

      {/* Next Button */}
      <View style={styles.bottom}>
        <ProgressDot total={6} current={0} />
        <GradientButton title="Next" onPress={()=> navigation.navigate("AccountType")} />
      </View>
    </View>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    justifyContent: "flex-end",
  },
  title: {
     fontSize:28,
     fontWeight:400,
  },
  subtitle: {
    fontSize: 15,
    color: "gray",
    marginTop:15,
    marginBottom: 20,
  },

  bottom:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:30,
    marginBottom:15,

  },
});