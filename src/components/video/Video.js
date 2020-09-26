import React from 'react';
import './style.css';

const Video = ({title, description, video_url, image_url}) => {
    return (
        <div className="card" /* onClick={() => window.open(video_url)} */>
            <div className="image">
                <img src={image_url} width={300} alt="" />
            </div>
            <div className="content">
                <span className="title">{title}</span>
                <span className="description">{description}</span>
            </div>
        </div>
    );
}

export default Video;
