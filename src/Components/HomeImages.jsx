import { useState, useEffect } from "react";

export const HomeImages = () => {
    const images = [
        {src: 'require("../public/images/image-board.webp").default', alt: 'image board', id: 1, num: 'one'},
        {src: require('.../public/images/nyc-stairs.webp').default, alt: 'nyc stairs', id: 2,  num: 'two'},
        {src: 'require("./images/nyc-streets-j.webp").default', alt: 'nyc streets', id: 3, num: 'three'},
        {src: 'require(./images/palm-trees.webp).default', alt: 'palm trees', id: 4, num: 'four'},
        {src: require('./images/pmoa.webp').default, alt: 'philadelphia museum of art', id: 5, num: 'five'}
    ];

    const [position, setPosition] = useState(false);

    useEffect(() => {

        setTimeout(() => {
            setPosition(true);
        }, 2000);

    }, []);

    return (
            <div className="img-container">
                {images.map((image) => {
                    return <img src={image.src} alt={image.alt} key={image.id} className={`img ${image.num} ${position ? 'positioning' : ''}`}/>
                })}
            </div>
    );
}
