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
        thumnailSource: 'https://i.ytimg.com/vi/WmGPO10hhlw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwZia8f8ihdYL9MAP25zVFDm-ynA',
        title: 'Stephen Curry\'s Best Plays Of The Decade',
        description: 'Stephen Curry\'s Best Plays Of The Decade',
    }
]

const VideoListPage = (props) => {
    console.log(props.videoType)
    const videoList = basketballVideo.map(video => 
        <VideoItem
            id={props.id}
            key={props.id}
            thumnailSource={props.thumnailSource}
            title={props.title}
            description={props.description}
        />
        )
    // if(props.videoType === 'basketball') {
    // }
    return (
        <div className={styles['video-category-container']}>
            {videoList}
        </div>
    );
}

export default VideoListPage;