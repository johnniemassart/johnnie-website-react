import { useState, useEffect } from "react";

export const HomeImages = () => {
    const images = [
        {src: '../public/images/image-board.webp', alt: 'image board', id: 1, num: 'one'},
        {src: '.../public/images/nyc-stairs.webp', alt: 'nyc stairs', id: 2,  num: 'two'},
        {src: '.../images/nyc-streets-j.webp', alt: 'nyc streets', id: 3, num: 'three'},
        {src: '../images/palm-trees.webp', alt: 'palm trees', id: 4, num: 'four'},
        {src: './images/pmoa.webp', alt: 'philadelphia museum of art', id: 5, num: 'five'}
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
                    return <img src={require('image.src').default} alt={image.alt} key={image.id} className={`img ${image.num} ${position ? 'positioning' : ''}`}/>
                })}
            </div>
    );
}
