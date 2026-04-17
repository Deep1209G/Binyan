import { View, StyleSheet } from 'react-native'
import React from 'react'

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
            gap: 6,
    },

    dot:{
         width: 6,
         height: 6,
         borderRadius: 3,
         backgroundColor: "#ccc",
    },

    activeDot:{
        backgroundColor: "#FF6A00",
        width: 10, 
        height:6,
        borderRadius: 10,
    },

})