import React from 'react';
import styles from './BlogDisplay.module.css';

const BlogDisplay = (props) => {
    return (
        <div className={styles['blog-container']}>
            <h2 className={styles['blog-title']}>{props.title}</h2>
            <p className={styles['blog-date']}>{props.date}</p>
            <div className={styles['blog-content']}>{props.content}</div>
            {props.imageSource && <img className={styles['blog-image']} src={props.imageSource} alt='Blog demonstrate'/>}
        </div>
    );
}

export default BlogDisplay;