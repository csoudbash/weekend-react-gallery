import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';


function App() {

  const [galleryList, setGalleryList] = useState([]);

  useEffect( () => {
    console.log('in useEffect');
    getPictures();
  }, [])


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
    return (
      
      <GalleryList 
      galleryList = {galleryList}/>
    );
}

export default App;
