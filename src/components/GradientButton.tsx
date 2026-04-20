import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Pressable, Text, StyleSheet } from 'react-native';
import theme from '../theme';


interface GradientButtonProps {
    title: string;
    onPress: () => void;
}

const GradientButton = ({title, onPress}: GradientButtonProps) => {
    return(
        <Pressable onPress={onPress}>
            <LinearGradient
            colors={theme.gradient}
            style = {styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            >
                <Text style = {styles.text}>
                    {title}
                </Text>
            </LinearGradient>
        </Pressable>

    )
};

export default GradientButton;


const styles = StyleSheet.create({
    button:{
    padding: theme.xl,
    borderRadius: 20,
    alignItems: "center",
    width:100,
    },


    text:{
    color:theme.white,
    fontWeight: "600",
    fontSize:18,
    },
})