import { View, StyleSheet } from 'react-native'
import React from 'react'
import theme from '../theme';

interface ProgressDotProps {
    total: number;
    current: number;
}

const ProgressDot = ({total, current}:ProgressDotProps) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={[
            styles.dot,
            current === i && styles.activeDot
          ]}
        />
      ))}
    </View>
  );
};

export default ProgressDot;

const styles = StyleSheet.create({
    container:{
            flexDirection: "row",
            gap: theme.xs,
    },

    dot:{
         width: 10,
         height: 10,
         borderRadius: 5,
         backgroundColor: theme.backgroundDot,
    },

    activeDot:{
        backgroundColor: theme.primary,
        width: 10, 
        height:10,
        borderRadius: 10,
    },

})