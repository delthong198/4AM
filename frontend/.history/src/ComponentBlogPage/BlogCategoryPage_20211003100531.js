import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';
import styles from './BlogCategoryPage.module.css';
import basketballImg from './assets/basketball-blog-thumnail.jpg';
import calisthenicImg from './assets/calisthenic-blog-thumnail.jpg';

const BlogCategoryPage = (props) => {
    return (
        <div className={styles['video-category-page']}>
            <Header />
            <div className={`${styles['blog-category']} card-deck`}>
                <Link to="/blog-category/basketball">
                    <div className={styles['blog-category-item']}>
                        <img className={styles['blog-category-item-img']} src={basketballImg} alt="Card cap"/>
                        <div className={styles['blog-category-item-body']}>
                            <h5 className={styles['body-title']}>Basketball</h5>
                            <p className={styles['body-description']}>Blog hướng dẫn luyện tập các động tác bóng rổ.</p>
                        </div>
                    </div>
                </Link>
                <Link to="/blog-category/calisthenic">
                    <div className={styles['blog-category-item']}>
                        <img className={styles['blog-category-item-img']} src={calisthenicImg} alt="Card cap"/>
                        <div className={styles['blog-category-item-body']}>
                            <h5 className={styles['body-title']}>Calisthenic</h5>
                            <p className={styles['body-description']}>Blog hướng dẫn luyện tập street workout, calisthenic giúp rèn luyện sức khỏe.</p>
                        </div>
                    </div>
                </Link>
            </div>  
            <Footer option='blogPage-footer'/> 
        </div>
    );
}

export default BlogCategoryPage;