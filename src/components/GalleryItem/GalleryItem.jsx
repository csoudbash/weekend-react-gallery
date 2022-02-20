import { useState } from "react";
import './GalleryItem.css';


function GalleryItem({item, likePictures}) {
    
    const [toggleImage, setToggleImage] = useState(true); // creating a useState variable for toggling the image

    const toggle = () => {setToggleImage(!toggleImage)}; // creating a function that toggles the value of toggleImage
    // between true and false using the UseState variable setToggleImage

    function handleLikeButton() {
        // console.log('sending the info back to app.jsx');
        likePictures(item.id) // passing the item.id to the the likePictures function that was passed down from the app.jsx component
    }

    return(//rendering each individual item on the DOM
        <>
            <div className="thing" key={item.id}>
                {toggleImage ? // conditional rendering to either render the photo or the desctiption when the element is clicked
                (<div onClick= {toggle} className="picture"> 
                    <img src= {item.path}/>
                </div>) 
                :
                (<div onClick={toggle} className="description">
                    <p>{item.description}</p>
                </div>
                )} 
               <p><button onClick={handleLikeButton}>Like</button> {item.likes} likes</p>
            </div>
        </>
        )
}

export default GalleryItem;