import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { NativeStackNavigationProp} from "@react-navigation/native-stack";
import SelectableItem from "../components/SelectableItem";
import ProgressDot from "../components/ProgressDot";
import GradientButton from "../components/GradientButton";
import Icon from "react-native-vector-icons/Ionicons";
import { RootStackParamList} from "../../App";

interface ServiceProviderScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, "Language">;
}

const ServiceProviderScreen = ({ navigation}:ServiceProviderScreenProps ) => {
  const [serviceType, setServiceType] = useState<string | undefined>();

  return (
    <View style={styles.container}>
      
      <View>
        <Text style={styles.title}>Are you a service provider?</Text>
        <Text style={styles.text}>
          Choose how you'd like to continue.
        </Text>

        <View style={styles.row}>
          <SelectableItem
            variant="card"
            icon={<Icon name="person" size={16} color="#FF6A00" />}
            label="Browse Binyan"
            selected={serviceType === "Browse Binyan"}
            onPress={() => setServiceType("Browse Binyan")}
          />

          <SelectableItem
            variant="card"
            icon={<Icon name="business" size={16} color="#FF6A00" />}
            label="Create a Profile"
            selected={serviceType === "Create a Profile"}
            onPress={() => setServiceType("Create a Profile")}
          />
        </View>
      </View>

      {/* BOTTOM SECTION */}
      <View style={styles.bottom}>
        <ProgressDot total={6} current={2} />

        <GradientButton
          title="Next"
          onPress={() => navigation.navigate("OnBoardingScreen1")}
        />
      </View>
    </View>
  );
};

export default ServiceProviderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
    justifyContent: "flex-end",
  },

  title: {
    fontSize: 28,
    fontWeight: "400",
  },

  text: {
    fontSize: 16,
    color: "gray",
    marginTop: 10,
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom:20,
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop:30,
  },
});