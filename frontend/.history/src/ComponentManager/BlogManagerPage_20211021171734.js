import BlogList from './BlogList';
import React from 'react';
import styles from './BlogManagerPage.module.css';
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';

const BlogManager = () => {
    return (
        <div className={styles['blog-manager-page']}>
            <Header />
            <h2 className={styles['blog-manager-title']}>Trang quản lý bài viết</h2>
            <form className={styles['create-blog-form']} action={`/blog-list/create-new`}>
                <button type="submit" className="btn btn-primary">
                    Tạo blog
                </button>
            </form>
            <BlogList />
            <Footer option='fixedBottom0-footer'/>
        </div>
    )
}

export default BlogManager
