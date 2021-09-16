import { Link } from 'react-router-dom';
import styles from './BlogItem.module.css';

function BlogItem(props) {
    return (
        <Link to={`/blog-category/${props.videoType}/${props.videoID}`}>
            <div className={styles['blog-container']}>
                <img className={styles['blog-container-thumnail']} src={props.thumnailSource} alt="Video thumnail"/>
                <div className={styles['blog-container-body']}>
                    <h2 className={styles['blog-body-title']}>{props.title}</h2>
                    <p className={styles['blog-body-description']}>{props.description}</p>
                </div>
            </div>
        </Link>
    );
}

export default BlogItem;