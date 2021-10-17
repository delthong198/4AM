import styles from './Header.module.css';
import logo from '../../assets/images/4am-logo-1.jpg';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className={styles['header-container']}>
            <div className={styles['header-content']}>
                <div className={styles['header-img-heading']}>
                    <img src={logo} alt='4AM logo' className={styles['header-img']}/>
                    <h2 className={styles['header-heading']}>4AM TRAINING</h2>
                </div>
                <nav className={styles['header-main_nav']}>
                    <ul className={styles['header-nav-list']}>
                        <li className={styles['header-nav-list-item']}><Link to="/">Home</Link></li>
                        <li className={styles['header-nav-list-item']}><Link to="/video-category">Video</Link></li>
                        <li className={styles['header-nav-list-item']}><Link to="/blog-category">Blog</Link></li>
                    </ul>
                </nav>

                <div className={styles['header-account-action']}>
                    <a href="/login">Đăng nhập</a>
                </div>
                <div className={styles['header-account-action']}>
                    <a href="/register">Đăng kí</a>
                </div>
            </div>
        </div>
    );
}

export default Header;