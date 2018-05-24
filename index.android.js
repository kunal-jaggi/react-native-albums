//Place iOS code here
/*
Create a Component- component is a Widget that renderssomething on a device screen
*/


//Import a library to help create a Component
//'react' and 'react-native' are libs that were installed using npm
import React from 'react';
import { AppRegistry, View } from 'react-native';

//Header component is defined by us, not npm...that is why we need tp provide a relative path
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


//Create a Component
//App is the Root component, only root uses AppRegistry . It's the entry point of the app
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );
};

// flex:1 style means- please expand this component to fill the entire content on the device

AppRegistry.registerComponent('albums', () => App);
