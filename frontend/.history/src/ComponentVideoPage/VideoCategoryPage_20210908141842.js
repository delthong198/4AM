import styles from './VideoCategoryPage.module.css';
import basketballImg from './assets/basketball-video-category.jpg'
import calisthenicImg from './assets/calisthenic-video-category.jpg'

const VideoCategoryPage = (props) => {
    return (
        <div className={styles['video-category-container']}>
            <div className={`${styles['video-category']} card-deck`}>
                <div className={`${styles['video-category-item']}`}>
                    <img className={`${styles['video-category-item-img']}`} src={basketballImg} alt="Card cap"/>
                    <div className={`${styles['video-category-item-body']}`}>
                        <h5 className="card-title">Basketball</h5>
                        <p className="card-text">Video hướng dẫn luyện tập các động tác bóng rổ.</p>
                    </div>
                </div>
                <div className={`${styles['video-category-item']}`}>
                    <img className={`${styles['video-category-item-img']}`} src={calisthenicImg} alt="Card cap"/>
                    <div className={`${styles['video-category-item-body']}`}>
                        <h5 className="card-title">Calisthenic</h5>
                        <p className="card-text">Các bài tập street workout, calisthenic giúp rèn luyện sức khỏe.</p>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default VideoCategoryPage;