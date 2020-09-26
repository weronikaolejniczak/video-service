import React from 'react';
import {VideoList} from '../';
import './style.css';

const Main = ({theme}) => {
    return (
        <main className={theme === 'dark' ? 'dark-main' : null}>
            <VideoList theme={theme} />
        </main>
    );
}

export default Main;
