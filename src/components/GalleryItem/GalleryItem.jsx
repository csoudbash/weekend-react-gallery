function GalleryItem({item, likePictures}) {
    
    function handleLikeButton() {
        // console.log('sending the info back to app.jsx');
        likePictures(item.id)
    }

    return(
        <>
            <div key={item.id}>
                <img src= {item.path}/>
                <button onClick={handleLikeButton}>Like</button>
                <p>this many people like this:{item.likes}</p>
            </div>
        </>
        )
}

export default GalleryItem;