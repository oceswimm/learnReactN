import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import Map from './src/components/Map';


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Header title={'Petmate'} />
        <Map/>
      </View>

    );
  }
}
