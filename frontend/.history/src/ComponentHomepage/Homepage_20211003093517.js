import Slider from "./Slider";
import styles from './Homepage.module.css';
import Footer from "../Components/Layout/Footer";
import Header from "../Components/Layout/Header";

const Homepage = (props) => {
    return (
        <div className={styles['homepage']}>
            <Header />
            <Slider />
            <h2 className={styles['about-us-title']}>About us</h2>
            <div className={styles['about-us-content']}>
                <h3 className={styles['about-us-sub-title']}>CHÚNG TÔI, NHỮNG NGƯỜI MUỐN TRUYỀN CẢM HỨNG TẬP LUYỆN THỂ DỤC THỂ THAO CHO TẤT CẢ MỌI NGƯỜI!</h3>
                <p className={styles['about-us-paragraph']}>
                    ⏰Vào 4 giờ sáng, khi mọi người đang say giấc trên chiếc giường của mình thì những huyền thoại họ đã thức dậy và tập luyện. Họ không cần báo thức vì đam mê sẽ đánh thức họ mỗi ngày!
                </p>

                <p className={styles['about-us-paragraph']}>
                    🌓4 giờ sáng, khung giờ của sự giao thoa kết thúc ngày cũ và bắt đầu một ngày mới. Nó yên tĩnh vừa đủ để bạn hiểu mình là ai, bạn muốn trở thành điều gì nhất trên thế giới này! Mỗi người, ai cũng có 24h/ngày như nhau, vì vậy mỗi sự phung phí về việc sử dụng quỹ thời gian cũng sẽ đem lại từng kết quả khác nhau!
                </p>

                <p>
                    🏆Thành công đến từ những điều lớn lao, nhưng nó cần được bắt đầu từ những thay đổi nhỏ nhặt nhất!
                </p>

                <p className={styles['about-us-paragraph']}>
                    🎯Nghỉ ngơi hợp lí, ăn uống đầy đủ, tập luyện khoa học, sẵn sàng chăm chỉ hơn bất kì ai và trở thành 1 huyền thoại!
                </p>

                <p className={styles['about-us-end-paragraph']}>
                    Từ những chàng trai thức dậy vào 4 giờ sáng!
                </p>
            </div>
            <Footer className={styles.footer}/>
        </div>
    );
}

export default Homepage;