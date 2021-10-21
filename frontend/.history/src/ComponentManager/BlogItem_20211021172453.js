import { Link } from 'react-router-dom';
import styles from './BlogItem.module.css';
import swal from 'sweetalert';

function BlogItem(props) {
    const showDeleteForm = () => {
        swal({
            title: "Bạn chắc chứ?",
            text: "Một khi đã xóa, bạn sẽ không thể khôi phục được bài viết!",
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
              swal("Bài viết vẫn được giữ lại trong hệ thống!");
            }
          });
    }
    
    return (
        <div className={styles['blog-container']}>
            <Link to={`/blog-category/${props.blogType}/${props.blogID}`}>
            <img className={styles['blog-container-thumnail']} src={props.thumnailSource} alt="Blog thumnail"/>
            <div className={styles['blog-container-body']}>
                <h2 className={styles['blog-body-title']}>{props.title}</h2>
                <p className={styles['blog-body-description']}>{props.content}</p>
            </div>
            </Link> 
            <div className={styles['blog-control']}>
                <button type="button" className={`${styles['edit-btn']} btn btn-warning`}>Sửa</button>
                <button type="button" className={`${styles['delete-btn']} btn btn-danger`} onClick={showDeleteForm}>Xóa</button>
            </div>
        </div>
    );
}

export default BlogItem;
