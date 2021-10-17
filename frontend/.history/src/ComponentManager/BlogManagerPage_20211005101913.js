import React from 'react';
import styles from './BlogManagerPage.module.css';
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';
import BlogList from './BlogList';

const BlogManager = () => {
    return (
        <div className={styles['blog-manager-page']}>
            <Header />
            <BlogList />
            <Footer option='blogManagerPage-footer'/>
        </div>
    )
}

export default BlogManager
