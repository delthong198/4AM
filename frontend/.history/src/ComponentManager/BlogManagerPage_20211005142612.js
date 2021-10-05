import BlogList from './BlogList';
import React, { useState } from 'react';
import styles from './BlogManagerPage.module.css';
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';
import ConfirmDeleteForm from '../Components/Layout/ConfirmDeleteForm';

const BlogManager = () => {
    const [showDeleteForm, setShowDeleteForm] = useState(false);

    return (
        <div className={styles['blog-manager-page']}>
            <ConfirmDeleteForm />
            <Header />
            <h2 className={styles['blog-manager-title']}>Trang quản lý bài viết</h2>
            <form className={styles['create-blog-form']} action={`/blog-category/create-new`}>
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
