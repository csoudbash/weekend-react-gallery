import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList}) {
    

return(
    <>
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">Gallery of My Life</h1>
            </header>
            <GalleryItem 
            galleryList = {galleryList}
            />
        </div>
        
    </>
    )
}
export default GalleryList;