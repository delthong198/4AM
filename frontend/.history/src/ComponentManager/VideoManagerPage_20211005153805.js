import React from 'react';
import VideoList from './VideoList';

const VideoManagerPage = () => {
    const [showDeleteForm, setShowDeleteForm] = useState(false);

    const onShowDeleteForm = () => {
        setShowDeleteForm(true);
    }

    const onHideDeleteForm = () => {
        setShowDeleteForm(false);
    }

    return (
        <div className={styles['Video-manager-page']}>
            {showDeleteForm && <ConfirmDeleteForm onHideDeleteForm={onHideDeleteForm}/>}
            <Header />
            <h2 className={styles['Video-manager-title']}>Trang quản lý bài viết</h2>
            <form className={styles['create-video-form']} action={`/video-category/create-new`}>
                <button type="submit" className="btn btn-primary">
                    Tạo Video
                </button>
            </form>
            <VideoList onShowDeleteForm={onShowDeleteForm}/>
            <Footer option='videoManagerPage-footer'/>
        </div>
    )
}

export default VideoManagerPage
