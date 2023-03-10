import React from 'react';
import { useState } from 'react';
import imaged from '../Images/image-board.webp';
import splattered from '../Images/splattered.jpeg';
import tsrThoughts from '../Images/tsr thoughts.png';
import tsrHome from '../Images/tsr home.png';
import nycDoor from '../Images/nyc-door.webp';
import jacket from '../Images/jacket.webp';

export const ContentInner = () => {
    const contentInner = [
        {h1: 'IMAGED', p: 'a project created to highlight those defining the creative industry.', src: imaged, alt: 'collection board', className: 'img1', move: false},
        {h1: 'SPLATTERED', p: 'splattered, ripped, and stitched to disregard perfection.', src: splattered, alt: 'splattered', className: 'splattered-img', move: true},
        {h1: 'THE SIMPLISTIC RESTORATION.', p: 'founder of the digital development agency.', src: tsrThoughts, src2: tsrHome, alt: 'tsr content', alt2: 'tsr home', className: 'imgTsr-1', className2: 'imgTsr-2', move: false},
        {h1: 'THOUGHTS', p: 'a mentality.', src: nycDoor, alt: 'nyc door', className: 'thoughts-nyc-door', move: true},
        {h1: 'UNSTRUCTURED', p: 'military green jacket sewn without buttons for an open canvas.', src: jacket, alt: 'jacket', className: 'jacket-img', move: false}
    ];

    const [info, setInfo] = useState(-1);

    const display = (i) => {
        setInfo(i);
    };
    const remove = (i) => {
        setInfo(-1);
    };

    const [mousePosition, setMousePosition] = useState({
        top: 0,
        left: 0
    });

    const moveCursor = (e) => {
        const top = e.clientY;
        const left = e.clientX;
        setMousePosition({top,left});
    };

    return (
        <>
            {contentInner.map((content, i) => {
                return (
                    <React.Fragment key={content.alt}>
                        <div className="content-inner" onMouseEnter={() => display(i)} onMouseLeave={remove} onMouseMove={(e) => moveCursor(e)} onTouchStart={() => display(i)}>
                            <h1 style={{zIndex: info===i ? 6 : 5}}>{content.h1}</h1>
                            <p style={{opacity: info===i ? 1 : 0, zIndex: info===i ? 6 : 5}}>{content.p}</p>
                            <img src={content.src} alt={content.alt} className={`${content.className} ${info===i ? 'displayed' : ''}`} style={{top: content.move && info===i ? mousePosition.top : '', left: content.move && info===i ? mousePosition.left : ''}} />
                            {content.h1==='THE SIMPLISTIC RESTORATION.' ? <img src={content.src2} alt={content.alt2} className={`${content.className2} ${info===i ? 'displayed' : ''}`} /> : ''}
                        </div>
                    </React.Fragment>
                )
            })}
        </>
    );
}