import { useState } from "react";
import './GalleryItem.css';


function GalleryItem({item, likePictures}) {
    
    const [toggleImage, setToggleImage] = useState(true);

    const toggle = () => {setToggleImage(!toggleImage)};

    function handleLikeButton() {
        // console.log('sending the info back to app.jsx');
        likePictures(item.id)
    }

    return(
        <>
            <div className="thing" key={item.id}>
                {toggleImage ? 
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