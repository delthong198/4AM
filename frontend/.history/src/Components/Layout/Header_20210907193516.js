import styles from './Header.module.css';
import logo from '../../assets/images/4am-logo-1.jpg'

const Header = (props) => {
    return (
        <div className={styles['header-container']}>
            <div className={styles['header-content']}>
                <div className={styles['header-img-heading']}>
                    <img src={logo} className={styles['header-img']}/>
                    <h2 className={styles['header-heading']}>4AM TRAINING</h2>
                </div>
                <nav className={styles['header-main_nav']}>
                    <ul className={styles['header-nav-list']}>
                        <li className={styles['header-nav-list-item']}><a>Home</a></li>
                        <li className={styles['header-nav-list-item']}><a>About us</a></li>
                        <li className={styles['header-nav-list-item']}><a>Video</a></li>
                        <li className={styles['header-nav-list-item']}><a>Blog</a></li>
                        <li className={styles['header-nav-list-item']}><a>Contact</a></li>
                    </ul>
                </nav>

                <div className={styles['header-account-action']}>
                    <a href="">Sign up/ Login</a>
                </div>
            </div>
        </div>
    );
}

export default Header;