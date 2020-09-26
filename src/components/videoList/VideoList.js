import React from 'react';
import {Video} from '../';
import './style.css';

const VideoList = () => {
    return (
        <div className="video-list">
            <Video title={"Mój ulubiony filmik 1"} description={"Opis mojego ulubionego filmiku"} />
            <Video title={"Mój ulubiony filmik 2"} description={"Opis mojego ulubionego filmiku 2"} />
            <Video title={"Mój ulubiony filmik 3"} description={"Opis mojego ulubionego filmiku 3"} />
        </div>
    );
}

export default VideoList;
