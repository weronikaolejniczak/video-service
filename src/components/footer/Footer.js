import React from 'react';
import './style.css';

const Footer = ({theme}) => {
    return (
        <footer className={theme === 'dark' ? 'dark-footer' : null}>
            <span className="content">
                by <span className="author-name">Weronika Olejniczak</span> <a href="https://github.com/weronikaolejniczak" rel="noopener noreferrer" target="_blank">@weronikaolejniczak</a>
            </span>
        </footer>
    );
}

export default Footer;
