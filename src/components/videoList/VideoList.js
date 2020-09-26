import React, {useEffect, useState} from 'react';
import {Video, Player} from '../';
import './style.css';
import database from '../../data/database';

const VideoList = ({theme}) => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        setVideos(database);
    }, []);

    if (!videos) {
        return (
            <div className="loading">
                Loading...
            </div>
        );
    } else if (!!selectedVideo) {
        return <Player theme={theme} video={selectedVideo} setSelectedVideo={setSelectedVideo} />
    } else {
        return (
            <div className="video-list">
                {videos.map((video, key) => {
                        return <Video
                            key={key}
                            video={video}
                            theme={theme}
                            setSelectedVideo={setSelectedVideo}
                        />
                    })
                }
            </div>
        );
    }
}

export default VideoList;
