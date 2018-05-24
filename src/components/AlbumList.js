import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail'

//A class based component is used to fetch data or helper utility method
/*
1. A user triggered event should update the 'state'of a component
2. Update the state of a component by calling this.setState() api
3. calling setState re-renders the component
4. State is used for a component's internal record keeping
5. Only class based compnents have state
6. props is used to pass data btw arent to child
*/

class AlbumList extends Component {
  state = { albums: [] }; //initial/default state

  //lifecycle callback, ideal for making network request
  componentWillMount() {
    console.log('componentWillMount called in Album List');

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  //helper function
 renderAlbums() {
   return this.state.albums.map(album =>
     <AlbumDetail key={album.title} album={album} />
   );
 }

 render() {
   console.log(this.state);

   return (
     <ScrollView>
        { this.renderAlbums() }
     </ScrollView>
   );
 }
}

export default AlbumList;
