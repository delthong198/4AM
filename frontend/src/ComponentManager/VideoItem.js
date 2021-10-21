import { Link } from 'react-router-dom';
import styles from './VideoItem.module.css';
import swal from 'sweetalert';

const showDeleteForm = () => {
    swal({
        title: "Bạn chắc chứ?",
        text: "Một khi đã xóa, bạn sẽ không thể khôi phục được video!",
        icon: "warning",
        buttons: ['Hủy', true],
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Bạn đã xóa thành công!", {
            icon: "success",
          });
        } else {
          swal("Video vẫn được giữ lại trong hệ thống!");
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
