import React, {useEffect, useState} from 'react';
import {Video} from '../';
import './style.css';
import database from '../../data/database';

const VideoList = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        setVideos(database);
    }, []);

    if (!videos) {
        return (
            <div className="loading">
                Loading...
            </div>
        );
    } else {
        return (
            <div className="video-list">
                {videos.map((video, key) => {
                        return <Video
                            key={key}
                            title={video.title}
                            channel={video.channel}
                            date={video.date}
                            description={video.description}
                            video_url={video.video_url}
                            image_url={video.image_url}
                        />
                    })
                }
            </div>
        );
    }
}

export default VideoList;
