function GalleryItem({galleryList}) {
    
    

    return(
        <>
        
         {galleryList.map(item =>
            <div key={item.id}>
                <img src= {item.path}/>
                <button>Like</button>
                <p>{item.likes}</p>
            </div>
            )}
          
        </>
        )
}

export default GalleryItem;