import { useState, useEffect } from "react";
import imageBoard from '../Images/image-board.webp';
import nycStairs from '../Images/nyc-stairs.webp';
import nycStreetsJ from '../Images/nyc-streets-j.webp';
import palmTrees from '../Images/palm-trees.webp';
import pmoa from '../Images/pmoa.webp';

export const HomeImages = () => {
    const images = [
        {src: imageBoard, alt: 'image board', id: 1, num: 'one'},
        {src: nycStairs, alt: 'nyc stairs', id: 2,  num: 'two'},
        {src: nycStreetsJ, alt: 'nyc streets', id: 3, num: 'three'},
        {src: palmTrees, alt: 'palm trees', id: 4, num: 'four'},
        {src: pmoa, alt: 'philadelphia museum of art', id: 5, num: 'five'}
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
