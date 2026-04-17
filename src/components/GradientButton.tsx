import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


interface GradientButtonProps {
    title: string;
    onPress: () => void;
}

const GradientButton = ({title, onPress}: GradientButtonProps) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
            colors={["#ff7a00", "#c70039"]}
            style = {styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            >
                <Text style = {styles.text}>
                    {title}
                </Text>
            </LinearGradient>
        </TouchableOpacity>

    )
};

export default GradientButton;


const styles = StyleSheet.create({
    button:{
    padding: 20,
    borderRadius: 20,
    alignItems: "center",
    width:100,
    },


    text:{
    color:'white',
    fontWeight: "600",
    fontSize:18,
    },
})