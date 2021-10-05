import { Link } from 'react-router-dom';
import styles from './BlogItem.module.css';

function BlogItem(props) {
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
                <button type="button" className={`${styles['delete-btn']} btn btn-danger`} onClick={props.onShowDeleteForm}>Xóa</button>
            </div>
        </div>
    );
}

export default BlogItem;
