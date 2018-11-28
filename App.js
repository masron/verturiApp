// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/HomeList';

// Create a component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Verturi Health'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('verturi', () => App);