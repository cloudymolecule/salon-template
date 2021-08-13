import { LookbookSrc } from '../constants/LookbookSrc' 
import Gallery from "react-photo-gallery"
import React, { useState, useCallback } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"
import '../styles/LookBook.css'

function LookBook() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false)

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index)
        setViewerIsOpen(true)
    }, [])

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false)
    }
    return (
        <>
            <div className='lookbook-container'>
                <Gallery photos={LookbookSrc} onClick={openLightbox} />
                <ModalGateway>
                    {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                        currentIndex={currentImage}
                        views={LookbookSrc.map(x => ({
                            ...x,
                            srcset: x.srcSet,
                            caption: x.title
                        }))}
                        />
                    </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </>
    )
}

export default LookBook



