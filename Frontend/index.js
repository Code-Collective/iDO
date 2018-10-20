import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import PlanningList from './src/components/PlanningList';

const App = () => (
  <View>
    <Header headerText={'Venues'} />
    <PlanningList />
  </View>
);


AppRegistry.registerComponent('iDO', () => App);