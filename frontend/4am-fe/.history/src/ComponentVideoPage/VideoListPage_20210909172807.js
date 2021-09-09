import VideoItem from "./VideoItem";
import styles from './VideoListPage.module.css';

const basketballVideo = [{
    id: 1,
    videoID: 'wZrw_epznv0',
    thumnailSource: 'https://i.ytimg.com/vi/wZrw_epznv0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDgmNGkw3A0-GDX5nVpmai4W_MgVw',
    title: 'ĐỘI BÓNG RỔ 4AM THI ĐẤU TẠI GIẢI DONBOSCO!',
    description: '4AM COMPETITION TOURNAMENT',
    },  
    {
        id: 2,
        videoID: 'P5_xgip67ac',
        thumnailSource: 'https://i.ytimg.com/vi/P5_xgip67ac/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAHMVXY77aH3QpnMRSemnhlBgnRnw',
        title: 'Stephen Curry\'s Best Plays Of The Decade',
        description: 'Stephen Curry\'s Best Plays Of The Decade',
    }
]

const calisthenicVideo = [
    {
        id: 1,
        videoID: 'DkSBlgMqDiU',
        thumnailSource: 'https://i.ytimg.com/vi/DkSBlgMqDiU/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDrvlSujWwi_itDZslVloEhvHFydA',
        title: 'Calisthenic Training at 4am’s Court!',
        description: '4AM Workout',
    },
    {
        id: 2,
        videoID: 'c5ts2QbMz10',
        thumnailSource: 'https://i.ytimg.com/vi/c5ts2QbMz10/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZuXBMCzpPSk3Ian-2KIiWuczLzQ',
        title: 'StreetWorkout mùng 1 tết!',
        description: 'New year training',
    },
]

const VideoListPage = (props) => {
    var videoSource;
    if (props.videoType === 'basketball') {
        videoSource = basketballVideo;
    }
    else {
        videoSource = calisthenicVideo;
    }

    var videoList;

    if (videoSource) {
        videoList = videoSource.map(video => 
            <VideoItem
                key={video.id}
                thumnailSource={video.thumnailSource}
                title={video.title}
                description={video.description}
                videoType={props.videoType}
                videoID={video.videoID}
            />
        )
    }
    // if(props.videoType === 'basketball') {
    // }
    return (
        <div className={styles['video-category-page']}>
            <h2 className={styles['video-category-title']}>{props.videoType==='basketball' ? 'Basketball Videos' : 'Calisthenic Videos'}</h2>
            <button type="button" class="btn btn-success" onClick={props.onShowAddVideoForm}>Success</button>
            <div className={styles['video-category-container']}>
                {videoList}
            </div>
        </div>
    );
}

export default VideoListPage;