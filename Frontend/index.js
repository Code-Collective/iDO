import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (
  <Header headerText={'Venues'} />
);


AppRegistry.registerComponent('iDO', () => App);