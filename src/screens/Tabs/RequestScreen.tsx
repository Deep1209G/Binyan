import { StyleSheet, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import theme from '../../theme'
import SearchBar from '../../components/Home/SearchBar'
import TabSwitcher from '../../components/Request/TabSwitcher'

const RequestScreen = () => {
  return (

    <SafeAreaView style={styles.maincontainer}>
      
      {/*Header */}
      <Text style={styles.title}>Requests</Text>

      {/*Search Bar */}
      <SearchBar 
      placeholder='Search Requests'/>

      {/*Tab Switcher */}
      <TabSwitcher
       />


    </SafeAreaView>

  )
}

export default RequestScreen

const styles = StyleSheet.create({
    maincontainer:{
    flex: 1,
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl,
    },

    title: {
    alignSelf:'center',
    fontSize: theme.typography.xl,
    color: theme.colors.textPrimary,
    fontFamily: theme.fontFamily.medium,
  },
})