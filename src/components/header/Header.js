import React from 'react';
import {Switch} from '../';
import './style.css';

const Header = ({theme, setTheme}) => {
    return (
        <header className={theme === 'dark' ? 'dark-header' : null}>
            <div className="logo">
                <span className="site-name"><span className="youtube">YT</span>Serve</span>
            </div>
            <div className="switch-container">
                <Switch theme={theme} setTheme={setTheme} />
            </div>
        </header>
    );
}

export default Header;
