import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
// import { response } from 'express';


function App() {

  const [galleryList, setGalleryList] = useState([]);
  const [itemLiked, setItemLiked] = useState(0);

  useEffect( () => {
    console.log('in useEffect');
    getPictures();
  }, [])

  const likePictures = (id) => {
    setItemLiked(id);
    axios({
      method: 'PUT',
      url: `gallery/like/${id}`,
      data: {
        galleryId: itemLiked
      }
    })
      .then((response) => {
        console.log('PUT response.data is', response.data)
        getPictures();
    }).catch((err) => {
        console.log('PUT error is', err)
    })
  }

  const getPictures = () => {
    console.log('in getItems');
    axios({
        method: 'GET',
        url: '/gallery'
    }).then( (response) => {
        console.log('Entire response is', response.data);
        setGalleryList(response.data)
    }).catch((error) => {
        console.log('Error getting list', error);
    })
}
// console.log(itemLiked);
    return (
      
      <GalleryList 
      galleryList = {galleryList}
      likePictures = {likePictures}
      />
    );
}

export default App;