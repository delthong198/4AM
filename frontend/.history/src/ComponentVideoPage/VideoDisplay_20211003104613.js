import YouTube from 'react-youtube';
import styles from './VideoDisplay.module.css';
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';

const VideoDisplay = (props) => {
    const videoOnReady = (e) => {
        e.target.seekTo(0);
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

        <div className={styles['video-display-page']}>
            <Header />
            <div className={styles['video-container']}>
                <YouTube 
                    videoId={props.videoID} 
                    opts={opts}
                    onReady={videoOnReady}
                />
            </div>
            <Footer option='videoDisplay-page'/>
        </div>
    );
}

export default VideoDisplay;