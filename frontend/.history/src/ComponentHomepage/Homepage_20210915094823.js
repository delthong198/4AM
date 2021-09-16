import { Fragment } from "react/cjs/react.production.min";
import Slider from "./Slider";
import styles from './Homepage.module.css';

const Homepage = (props) => {
    return (
        <Fragment>
            <Slider />
            <h2 className={styles['about-us-title']}>About us</h2>
            <div className={styles['about-us-content']}>
                <h3 className={styles['about-us-sub-title']}>CHÚNG TÔI, NHỮNG NGƯỜI MUỐN TRUYỀN CẢM HỨNG TẬP LUYỆN THỂ DỤC THỂ THAO CHO TẤT CẢ MỌI NGƯỜI!</h3>
                <p className={styles['about-us-paragraph']}>⏰Vào 4 giờ sáng, khi mọi người đang say giấc trên chiếc giường của mình thì những huyền thoại họ đã thức dậy và tập luyện. Họ không cần báo thức vì đam mê sẽ đánh thức họ mỗi ngày!</p>

            </div>
        </Fragment>
    );
}

export default Homepage;