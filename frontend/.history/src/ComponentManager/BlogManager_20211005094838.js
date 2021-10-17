import React from 'react';
import styles from './BlogManager.module.css';
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';

const BlogManager = () => {
    return (
        <div className={styles['blog-manager-page']}>
            <Header />
            <Footer />
        </div>
    )
}

export default BlogManager
