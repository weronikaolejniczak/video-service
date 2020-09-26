import React from 'react';
import './style.css';

const Video = ({title, channel, date, description, video_url, image_url}) => {
    return (
        <div className="card" /* onClick={() => window.open(video_url)} */>
            <div className="image">
                <img src={image_url} width={300} alt="" />
            </div>
            <div className="content">
                <span className="title">{title}</span>
                <span className="subtitle">{channel} | {date}</span>
                <span className="description">{description}</span>
            </div>
        </div>
    );
}

export default Video;
