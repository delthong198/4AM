import YouTube from 'react-youtube';

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
        <div>
            <YouTube 
                videoId={props.videoID} 
                opts={opts}
            />

        </div>
    );
}

export default VideoDisplay;