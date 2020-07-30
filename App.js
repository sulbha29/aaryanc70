
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TransactionScreen from './screens/transactionscreen'
import SearchScreen from './screens/searchscreen'
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'


export default class App extends React.Component {
  render(){
  return (
  <AppContainer/>
  );
  }
}
 const Tabnavigator = createBottomTabNavigator({
   transaction:{screen:TransactionScreen},
   search:{screen:SearchScreen}
 })
 const AppContainer = createAppContainer(Tabnavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
