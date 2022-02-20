import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList, likePictures}) {
    

return(// rendering the entire DOM 
    <>
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">Gallery of My Life</h1>
            </header>
            {galleryList.map(item => // passing each item individually to the GalleryItem component
             <GalleryItem key={item.id}
            item = {item}
            likePictures = {likePictures}
            />
            )}
        </div>
        
    </>
    )
}
export default GalleryList;