import YouTube from 'react-youtube';
import syles from './VideoDisplay.module.css';

const VideoDisplay = (props) => {
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
            />
        </div>
    );
}

export default VideoDisplay;