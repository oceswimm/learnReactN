import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/header';
import Map from './src/components/Map';
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card style={styles.myCard}>
        <Header title={'Petmate'} />
        </Card>
        <Card>
        <Map/>
        </Card>
      </View>



    );
  }
}


const styles = StyleSheet.create({

});
