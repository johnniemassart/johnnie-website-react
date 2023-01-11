import { useState, useEffect } from "react";

export const Cursor = () => {

    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });

    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        
        const moveCursor = (e) => {
            const x = e.clientX-5;
            const y = e.clientY-5;
            setPosition({x,y});
            setOpacity(1);
        };

        const removeCursor = () => {
            setOpacity(0);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseout', removeCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseout', removeCursor);
        };

    }, [])

    return (  
    <div className="cursor" style={{transform: `translate3d(${position.x}px, ${position.y}px, 0)`, opacity: opacity}}></div>
    );
}