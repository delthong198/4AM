import VideoItem from "./VideoItem";
import styles from './VideoListPage.module.css';

const basketballVideo = [{
    id: 1,
    videoID: 'WmGPO10hhlw',
    thumnailSource: 'https://i.ytimg.com/vi/WmGPO10hhlw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwZia8f8ihdYL9MAP25zVFDm-ynA',
    title: 'Steph Curry\'s BEST PLAYS Of The 2020-21 Regular Season',
    description: 'Stephen Curry Highlight in NBA 2020-2021 Season',
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
        description: 'Stephen Curry Highlight in NBA 2020-2021 Season',
    },
    {
        id: 2,
        videoID: 'WmGPO10hhlw',
        thumnailSource: 'https://i.ytimg.com/vi/WmGPO10hhlw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwZia8f8ihdYL9MAP25zVFDm-ynA',
        title: 'Steph Curry\'s BEST PLAYS Of The 2020-21 Regular Season',
        description: 'Stephen Curry Highlight in NBA 2020-2021 Season',
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
        videoList = basketballVideo.map(video => 
            <VideoItem
                key={video.id}
                thumnailSource={video.thumnailSource}
                title={video.title}
                description={video.description}
            />
        )
    }
    // if(props.videoType === 'basketball') {
    // }
    return (
        <div className={styles['video-category-page']}>
            <h2 className={styles['video-category-title']}>{props.videoType==='basketball' ? 'Basketball Videos' : 'Calisthenic Videos'}</h2>
            <div className={styles['video-category-container']}>
                {videoList}
            </div>
        </div>
    );
}

export default VideoListPage;