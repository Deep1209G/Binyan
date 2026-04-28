import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import theme from '../../theme';

type ServiceProp = {
    title: string,
    onPress: () => void,
}
const AllServiceCard = ({title, onPress}:ServiceProp) => {
  return (
    <Pressable onPress={onPress} style={styles.squarecontainer}>
      <View style={styles.circlecontainer}>
      </View>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default AllServiceCard;

const styles = StyleSheet.create({
  squarecontainer: {
    backgroundColor: theme.colors.card,
    height: 130,
    flex:1,
    marginHorizontal: 5,
    marginTop: theme.spacing.md,
    borderRadius: theme.radius.md,
    alignItems:'center',
    flexDirection:'column'
  },
  circlecontainer:{
   marginTop:theme.spacing.sm,
   height:80,
   width:80,
   borderRadius:theme.radius.round,
   backgroundColor: theme.colors.white,
  },

  text:{
    marginTop:theme.spacing.sm,
    fontSize:theme.typography.medium,
    fontFamily:theme.fontFamily.medium,
  }

});
