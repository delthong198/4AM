import VideoList from './VideoList';
import React, { useState } from 'react';
import styles from './VideoManagerPage.module.css';
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';
import ConfirmDeleteForm from '../Components/Layout/ConfirmDeleteForm';

const VideoManagerPage = () => {

    return (
        <div className={styles['video-manager-page']}>
            <Header />
            <h2 className={styles['video-manager-title']}>Trang quản lý video</h2>
            <form className={styles['create-video-form']} action={`/video-list/add-new`}>
                <button type="submit" className="btn btn-primary">
                    Tạo Video
                </button>
            </form>
            <VideoList />
            <Footer option='fixedBottom0-footer'/>
        </div>
    )
}

export default VideoManagerPage
