import { Link } from 'react-router-dom';
import styles from './BlogItem.module.css';

function BlogItem(props) {
    return (
        <Link to={`/blog-category/${props.blogType}/${props.blogID}`}>
            <div className={styles['blog-container']}>
                <img className={styles['blog-container-thumnail']} src={props.thumnailSource} alt="Blog thumnail"/>
                <div className={styles['blog-container-body']}>
                    <h2 className={styles['blog-body-title']}>{props.title}</h2>
                    <p className={styles['blog-body-description']}>{props.content}</p>
                </div>
                <div className={styles['blog-control']}>
                    <button type="button" className={`${styles['edit-btn']} btn btn-warning`}>Sửa</button>
                    <button type="button" className={`${styles['delete-btn']} btn btn-danger`}>Xóa</button>
                </div>
            </div>
        </Link>
    );
}

export default BlogItem;