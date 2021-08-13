import '../styles/LookBook.css'
import { LookbookSrc } from '../constants/LookbookSrc' 
import Gallery from "react-photo-gallery";


function LookBook() {
    return (
        <>
            <div className='lookbook-container'>
                <Gallery photos={LookbookSrc} direction={"column"} />
                
            </div>
        </>
        
    )
}

export default LookBook



