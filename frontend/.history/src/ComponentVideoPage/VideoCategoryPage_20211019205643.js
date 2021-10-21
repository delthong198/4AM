import { Link } from "react-router-dom";
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';
import styles from './VideoCategoryPage.module.css';
import basketballImg from './assets/basketball-video-category.jpg';
import calisthenicImg from './assets/calisthenic-video-category.jpg';

const VideoCategoryPage = (props) => {
    return (
        <div className={styles['video-category-page']}>
            <Header />
            <div className={styles['video-manager-link']}>
                <Link to="/video-manager">
                    <button type="button" className="btn btn-primary">Quản lý blog</button>
                </Link>
            </div>
            <div className={`${styles['video-category']} card-deck`}>
                <Link to="/video-category/basketball">
                    <div className={styles['video-category-item']}>
                        <img className={styles['video-category-item-img']} src={basketballImg} alt="Card cap"/>
                        <div className={styles['video-category-item-body']}>
                            <h5 className='card-title'>Basketball</h5>
                            <p className="card-text">Video hướng dẫn luyện tập các động tác bóng rổ.</p>
                        </div>
                    </div>
                </Link>
                <Link to="/video-category/calisthenic">
                    <div className={styles['video-category-item']}>
                        <img className={styles['video-category-item-img']} src={calisthenicImg} alt="Card cap"/>
                        <div className={styles['video-category-item-body']}>
                            <h5 className='card-title'>Calisthenic</h5>
                            <p className="card-text">Các bài tập street workout, calisthenic giúp rèn luyện sức khỏe.</p>
                        </div>
                    </div>
                </Link>
            </div> 
            <Footer option='fixedBottom0-footer'/> 
        </div>
    );
}

export default VideoCategoryPage;