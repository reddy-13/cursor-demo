import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import logo from '../assets/wizaart-img.56787174 .gif';

const CustomCursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const moveCursor = (event) => {
            gsap.to(cursor, {
                duration: 0.3,
                x: event.clientX - 580,
                y: event.clientY - 150,
                ease: 'power2.out',
            });
        };

        document.addEventListener('click', moveCursor);

        return () => {
            document.removeEventListener('click', moveCursor);
        };
    }, []);

    return <div ref={cursorRef} className="custom-cursor" style={{ backgroundImage: `url(${logo})` }}></div>;
};

export default CustomCursor;
