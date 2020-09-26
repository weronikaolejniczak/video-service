import React from 'react';
import './style.css';

const Video = ({title, description, video_url}) => {
    return (
        <div className="card">
            <span className="title">{title}</span>
            <span className="description">{description}</span>
        </div>
    );
}

export default Video;
