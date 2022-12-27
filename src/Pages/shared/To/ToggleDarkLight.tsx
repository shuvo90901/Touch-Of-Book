import React, { useEffect, useState } from 'react';
import './ToggleDarkLight.css'

const ToggleDarkLight = () => {
    const [theme, setTheme] = useState('light');
    const handleDark = () => {
        setTheme('dark')
    }
    const handlelight = () => {
        setTheme('light')
    }
    const handleOther = () => {
        setTheme('other')
    }
    useEffect(() => {
        document.body.className = theme;

    }, [theme]);
    return (
        <div className=''>
            <input onClick={handlelight} type="radio" name="radio-1" className="radio bg-white" />
            <p>Light</p>
            <input onClick={handleDark} type="radio" name="radio-1" className="radio bg-white" />
            <p>Dark</p>
            <input onClick={handleOther} type="radio" name="radio-1" className="radio bg-white " />
            <p>Other</p>
        </div>
    );
};

export default ToggleDarkLight;