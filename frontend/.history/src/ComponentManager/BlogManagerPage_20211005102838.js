import React from 'react';
import styles from './BlogManagerPage.module.css';
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';
import BlogList from './BlogList';

const BlogManager = () => {
    return (
        <div className={styles['blog-manager-page']}>
            <Header />
            <h2 className={styles['blog-manager-title']}>Trang quản lý bài viết</h2>
            <form className={styles['create-blog-form']} action={`/blog-category/${props.blogType}/create-new`}>
                <button type="submit" className="btn btn-primary">
                    Tạo blog
                </button>
            </form>
            <BlogList />
            <Footer option='blogManagerPage-footer'/>
        </div>
    )
}

export default BlogManager
