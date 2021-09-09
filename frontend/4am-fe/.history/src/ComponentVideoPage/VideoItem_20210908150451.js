import styles from './VideoItem.module.css';

function VideoItem(props) {
    return (
        <div className={styles['video-container']}>
            <img className={styles['video-container-thumnail']} src={props.thumnailSource} alt="Video thumnail"/>
            <div className={styles['video-container-body']}>
                <h2 className={styles['video-body-title']}>{props.title}</h2>
                <p className={styles['video-body-description']}>{props.description}</p>
            </div>
        </div>
    );
}

export default VideoItem;