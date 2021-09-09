import styles from './VideoPage.module.css';
import basketballImg from './assets/basketball-video-category.jpg'
import calisthenicImg from './assets/calisthenic-video-category.jpg'

const VideoPage = (props) => {
    return (
        <div className={styles['video-category-container']}>
            <div className={`${styles['video-category']} card-deck`}>
                <div className={`${styles['video-category-item']} card`}>
                    <img className="card-img-top" src={basketballImg} alt="Card cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Basketball</h5>
                    <p className="card-text">Video hướng dẫn luyện tập các động tác bóng rổ.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className={`${styles['video-category-item']} card`}>
                    <img className="card-img-top" src={calisthenicImg} alt="Card cap"/>
                    <div className="card-body">
                    <h5 className="card-title">Calisthenic</h5>
                    <p className="card-text">Các bài tập street workout, calisthenic giúp rèn luyện sức khỏe.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default VideoPage;