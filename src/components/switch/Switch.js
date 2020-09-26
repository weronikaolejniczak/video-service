import React, {useState} from 'react';
import './style.css';

const Switch = ({theme, setTheme}) => {
    const [darkActive, setDarkActive] = useState(theme === 'dark' ? true : false);

    const toggleSwitch = () => {
        setTheme(darkActive ? 'light' : 'dark');
        setDarkActive(!darkActive);
    };

    return (
        <div className={darkActive ? "dark-switch-track" : "switch-track"} onClick={toggleSwitch}>
            <div className={darkActive ? "active-thumb" : "thumb"} />
        </div>
    );
}

export default Switch;
