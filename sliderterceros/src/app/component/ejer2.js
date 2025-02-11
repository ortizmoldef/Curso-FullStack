"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
    desktop: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    tablet: { breakpoint: { max: 768, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
}

const MyCarousel = ({ images = [] }) => { // Default prop is an empty array
    return (
        <Carousel responsive={responsive} autoPlay infinite>
            {images.length > 0 ? (
                images.map((image, index) => (
                    <div key={index}>
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))
            ) : (
                <div>No images to display</div>  // Fallback message if no images are provided
            )}
        </Carousel>
    )
}

export default MyCarousel;
