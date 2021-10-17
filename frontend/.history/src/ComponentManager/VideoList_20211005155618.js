import React from 'react';
import styles from './VideoList.module.css';
import VideoItem from './VideoItem';

const videos = [
    {
        id: 1,
        videoID: 'wZrw_epznv0',
        type: 'basketball',
        thumnailSource: 'https://i.ytimg.com/vi/wZrw_epznv0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgmNGkw3A0-GDX5nVpmai4W_MgVw',
        title: 'ĐỘI BÓNG RỔ 4AM THI ĐẤU TẠI GIẢI DONBOSCO!',
        description: '4AM COMPETITION TOURNAMENT',
    },  
    {
        id: 2,
        videoID: 'P5_xgip67ac',
        type: 'basketball',
        thumnailSource: 'https://i.ytimg.com/vi/P5_xgip67ac/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHMVXY77aH3QpnMRSemnhlBgnRnw',
        title: 'Stephen Curry\'s Best Plays Of The Decade',
        description: 'Stephen Curry\'s Best Plays Of The Decade',
    },
    {
        id: 3,
        videoID: 'wZrw_epznv0',
        type: 'basketball',
        thumnailSource: 'https://i.ytimg.com/vi/wZrw_epznv0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgmNGkw3A0-GDX5nVpmai4W_MgVw',
        title: 'ĐỘI BÓNG RỔ 4AM THI ĐẤU TẠI GIẢI DONBOSCO!',
        description: '4AM COMPETITION TOURNAMENT',
    },  
    {
        id: 4,
        videoID: 'P5_xgip67ac',
        type: 'basketball',
        thumnailSource: 'https://i.ytimg.com/vi/P5_xgip67ac/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHMVXY77aH3QpnMRSemnhlBgnRnw',
        title: 'Stephen Curry\'s Best Plays Of The Decade',
        description: 'Stephen Curry\'s Best Plays Of The Decade',
    },
    {
        id: 5,
        videoID: 'DkSBlgMqDiU',
        type: 'calisthenic',
        thumnailSource: 'https://i.ytimg.com/vi/DkSBlgMqDiU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrvlSujWwi_itDZslVloEhvHFydA',
        title: 'Calisthenic Training at 4am’s Court!',
        description: '4AM Workout',
    },
    {
        id: 6,
        videoID: 'c5ts2QbMz10',
        type: 'calisthenic',
        thumnailSource: 'https://i.ytimg.com/vi/c5ts2QbMz10/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZuXBMCzpPSk3Ian-2KIiWuczLzQ',
        title: 'StreetWorkout mùng 1 tết!',
        description: 'New year training',
    },
    {
        id: 7,
        videoID: 'DkSBlgMqDiU',
        type: 'calisthenic',
        thumnailSource: 'https://i.ytimg.com/vi/DkSBlgMqDiU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrvlSujWwi_itDZslVloEhvHFydA',
        title: 'Calisthenic Training at 4am’s Court!',
        description: '4AM Workout',
    },
    {
        id: 8,
        videoID: 'c5ts2QbMz10',
        type: 'calisthenic',
        thumnailSource: 'https://i.ytimg.com/vi/c5ts2QbMz10/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZuXBMCzpPSk3Ian-2KIiWuczLzQ',
        title: 'StreetWorkout mùng 1 tết!',
        description: 'New year training',
    }
]

const VideoList = () => {
    const videoList = videos.map(video => 
        <VideoItem
            key={video.id}
            thumnailSource={video.thumnailSource}
            title={video.title}
            description={video.description}
            videoType={video.type}
            videoID={video.videoID}
            onShowDeleteForm={props.onShowDeleteForm}
        />
    )
    return (
        <div className={styles['video-list']}>
            <div className={styles['video-category-container']}>
                {videoList}
            </div>
        </div>
    )
}

export default VideoList;
