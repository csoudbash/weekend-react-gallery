import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList, likePictures}) {
    

return(
    <>
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">Gallery of My Life</h1>
            </header>
            {galleryList.map(item =>
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