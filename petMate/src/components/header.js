//Import libraries
import * as React from 'react';
import {Text,StyleSheet,View} from 'react-native';
//Make a Component

export default class Header extends React.Component{
  render(){
    return(
      <View style={styles.viewStyle}>
      <Text style={styles.titleText}>
      {this.props.title}
      </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height:60,
    paddingTop: 15,
    shadowColor: 'black',
    shadowOffset: {width:0, height: 2},
    shadowOpacity: 0.2,

  },
  titleText: {
    fontSize: 20,
  }

});


//Make the component available to other parts of the app
