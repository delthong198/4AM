import React from 'react';
import styles from './BlogManagerPage.module.css';
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';
import BlogListPage from './BlogListPage';

const BlogManager = () => {
    return (
        <div className={styles['blog-manager-page']}>
            <Header />
            <BlogListPage />
            <Footer option='blogManagerPage-footer'/>
        </div>
    )
}

export default BlogManager
