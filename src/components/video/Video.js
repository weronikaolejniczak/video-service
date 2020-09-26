import React from 'react';
import './style.css';

const Video = ({title, channel, date, description, video_url, image_url, theme}) => {
    return (
        <div className={theme === 'dark'? "dark-card" : "card"} /* onClick={() => window.open(video_url)} */>
            <div className="image">
                <img src={image_url} width={360} alt={description} />
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
