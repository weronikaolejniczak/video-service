import React from 'react';
import './style.css';

const Video = ({video, theme, setSelectedVideo}) => {
    const {title, channel, date, description, video_url, image_url} = video;

    return (
        <div 
            className={theme === 'dark'? "dark-card" : "card"} 
            onClick={() => /* window.open(video_url) */ setSelectedVideo(video)}
        >
            <div className="card-image">
                <img src={image_url} width={360} alt={description} />
            </div>
            <div className="card-content">
                <span className="card-title">{title}</span>
                <span className="card-subtitle">{channel} | {date}</span>
                <span className="card-description">{description}</span>
            </div>
        </div>
    );
}

export default Video;
