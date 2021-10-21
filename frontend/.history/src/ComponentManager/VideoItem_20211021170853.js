import { Link } from 'react-router-dom';
import styles from './VideoItem.module.css';
import swal from 'sweetalert';

const showDeleteForm = () => {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
}

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
                <button type="button" className={`${styles['delete-btn']} btn btn-danger`} onClick={showDeleteForm}>Xóa</button>
            </div>
        </div>
    )
}

export default VideoItem;
