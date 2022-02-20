import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
// import { response } from 'express';


function App() {

  const [galleryList, setGalleryList] = useState([]); // use state variable for the items grabbed from the GetPictures function 
  const [itemLiked, setItemLiked] = useState(0); // use state variable to grab the item.id sent from the GalleryItem component and 
  // setting it the to itemLiked variable which is then sent over to the server in the PUT statement

  useEffect( () => {// on page load, run getPictures
    console.log('in useEffect');
    getPictures();
  }, [])

  const likePictures = (id) => {// function passed down to and called in GalleryItem.jsx
    setItemLiked(id);
    axios({// PUT statement for sending the id selected to the server side
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

  const getPictures = () => {// grabbing the array of variables from the server side
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
    return (// allowing us to render the DOM in the GalleryList.jsx component to lessen the Clutter in this file
      
      <GalleryList 
      galleryList = {galleryList}
      likePictures = {likePictures}
      />
    );
}

export default App;