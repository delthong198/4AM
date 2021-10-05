import { Link } from 'react-router-dom';
import styles from './VideoItem.module.css';

const VideoItem = (props) => {
    return (
        <div className={styles['video-container']}>
            <Link to={`/video-category/${props.videoType}/${props.videoID}`}>
                <img className={styles['video-container-thumnail']} src={props.thumnailSource} alt="Video thumnail"/>
                <div className={styles['video-container-body']}>
                    <h2 className={styles['video-body-title']}>{props.title}</h2>
                    <p className={styles['video-body-description']}>{props.description}</p>
                </div>
            </Link>
            <div className={styles['video-control']}>
                <button type="button" className={`${styles['edit-btn']} btn btn-warning`}>Sửa</button>
                <button type="button" className={`${styles['delete-btn']} btn btn-danger`} onClick={props.onShowDeleteForm}>Xóa</button>
            </div>
        </div>
    )
}

export default VideoItem;
