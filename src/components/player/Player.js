import React from 'react';
import {ReactComponent as Icon} from '../../assets/go-back.svg';
import './style.css';

const Player = ({theme, video, setSelectedVideo}) => {
    return (
        <div className="player">
            <div 
                className={theme === 'dark' ? "dark-go-back" : "go-back"}
                onClick={() => setSelectedVideo(null)}
            >
                <Icon className={theme === 'dark' ? "fill-white" : null} width={16} height={16} />
                <span className="text-on-go-back">Go back</span>
            </div>
            <span className="player-subtitle">by <span className="player-channel">{video.channel}</span>, posted on <span className="player-date">{video.date}</span></span>
            <span className="player-title">{video.title}</span>
            <span className="player-description">{video.description}</span>
        </div>
    );
}

export default Player;
