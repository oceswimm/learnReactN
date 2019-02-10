import * as React from 'react';
import {ScrollView,View} from 'react-native';
import axios from 'axios';
import MapDetails from './mapDetails'

export default class Map extends React.Component{
  //data loading
  state={albums: []};
  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    //updates what component shows
   .then(response => this.setState({albums: response.data}));


  }
  renderAlbum()
  {
    return this.state.albums.map(album =>
      <MapDetails key={album.title} album={album} />
  );
  }
  render(){
    console.log(this.state);
    return(
      <ScrollView>
      {this.renderAlbum()}
      </ScrollView>

    );
  }
}
