import React from 'react';
import {View,Text} from 'react-native';

const albumDetails = (props) =>{
  return (
    <View>
    <Text>{props.album.title}</Text>
    </View>
  )
};

export default albumDetails;
