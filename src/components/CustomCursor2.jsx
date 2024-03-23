import React, { useEffect, useState } from 'react';
import logo from '../assets/wizaart-img.56787174 .gif';

function CustomCursor2() {
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    const [deviceType, setDeviceType] = useState('');
    const [isClicking, setIsClicking] = useState(false);
    const [buttonHovered, setButtonHovered] = useState(false);

    // check if it is a touch device
    const isTouchDevice = () => {
        try {
            document.createEvent('TouchEvent');
            setDeviceType('touch');
            return true;
        } catch (e) {
            setDeviceType('mouse');
            return false;
        }
    };

    const move = (e) => {
        const touchEvent = e.touches ? e.touches[0] : null;
        const x = !isTouchDevice() ? e.clientX : touchEvent?.clientX || 0;
        const y = !isTouchDevice() ? e.clientY : touchEvent?.clientY || 0;

        setCursorX(x);
        setCursorY(y);

        // Set the cursor border's position directly
        const cursorBorder = document.getElementById('cursor-border');
        if (cursorBorder) {
            cursorBorder.style.left = `${x}px`;
            cursorBorder.style.top = `${y}px`;
        }
    };

    const handleMouseDown = () => {
        setIsClicking(true);
    };

    const handleMouseUp = () => {
        setIsClicking(false);
    };

    const handleButtonHover = (hovered) => {
        setButtonHovered(hovered);
    };

    useEffect(() => {
        // document.addEventListener('mousemove', move);
        document.addEventListener('touchstart', move);
        document.addEventListener('click', move);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            // document.removeEventListener('mousemove', move);
            document.removeEventListener('click', move);
            document.addEventListener('touchstart', move);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div>
            <style>
                {`
        * {
            margin: 0;
            // cursor: none;
        }
 
   
        #cursor {
            position: absolute;
            cursor: url(${logo}) auto;
            // background-color: ${isClicking ? 'crimson' : 'crimson'};
            height: 10px;
            width: 10px;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            transition: background-color 0.7s ease;
        }
 
        #cursor-border {
            position: absolute;
            width: 100px;
            height: 100px;
            background-color: transparent;
            // border: 3px solid ${buttonHovered ? 'red' : '#fff'};
            // border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            background-size: cover;
            transition: all 0.7s ease-out;
        }
      `}
            </style>
            <div
                id="cursor"
                style={{ left: `${cursorX}px`, top: `${cursorY}px`, }}
            ></div>
            <div id="cursor-border" style={{ backgroundImage: `url(${logo})` }}></div>

            <button
                onMouseEnter={() => handleButtonHover(true)}
                onMouseLeave={() => handleButtonHover(false)}
                style={{
                    backgroundColor: buttonHovered ? 'green' : 'transparent',
                    color: 'white',
                    padding: '10px 20px',
                    border: '2px solid white',
                    borderRadius: '5px',
                }}
            >
                Test
            </button>
        </div>
    );
}

export default CustomCursor2;