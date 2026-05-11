import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Pressable, Text, StyleSheet, ViewStyle, StyleProp, TextStyle } from 'react-native';
import theme from '../theme';


interface GradientButtonProps {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const GradientButton = ({title, onPress, style, textStyle}: GradientButtonProps) => {
    return(
        <Pressable onPress={onPress}  style={style}>
            <LinearGradient
            colors={theme.gradient}
            style = {styles.button}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            >
                <Text style = {[styles.text, textStyle]}>
                    {title}
                </Text>
            </LinearGradient>
        </Pressable>
    )
};

export default GradientButton;


const styles = StyleSheet.create({
    button:{
    padding: theme.spacing.xl,
    borderRadius: 20,
    alignItems: "center",
    width:100,
    },


    text:{
    color:theme.colors.white,
    fontWeight: "600",
    fontSize:18,
    },
})