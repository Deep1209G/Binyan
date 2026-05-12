import { Pressable, StyleSheet, ViewStyle, StyleProp, Text, TextStyle} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import theme from '../theme';

type ButtonProps = {
    title: string;
    onPress: () => void;
    stylebtn?: StyleProp<ViewStyle>;
    styleText?: StyleProp<TextStyle>;
    colors?: string[];
}
const Button = ({title, onPress, stylebtn , styleText, colors}:ButtonProps) => {
  return (
    <Pressable onPress={onPress}>   
        <LinearGradient
        colors={colors || theme.gradient}
        style={[styles.container, stylebtn]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
            <Text style={[styles.textcontainer, styleText]}>{title}</Text>
        </LinearGradient>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    container:{
        height:36,
        borderRadius:theme.radius.sm,
        alignItems:'center',
        justifyContent:'center',
        marginTop:theme.spacing.md,
    },
    textcontainer:{
        color:theme.colors.white,
        fontFamily:theme.fontFamily.medium,
        fontSize:theme.typography.regular,
    },

})