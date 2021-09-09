import YouTube from 'react-youtube';
import styles from './VideoDisplay.module.css';

const VideoDisplay = (props) => {
    const videoOnReady = (e) => {
        e.target.seekTo(100);
    }

    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    return (
        <div className={styles['video-container']}>
            <YouTube 
                videoId={props.videoID} 
                opts={opts}
                onReady={videoOnReady}
            />
        </div>
    );
}

export default VideoDisplay;