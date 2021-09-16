import styles from './Header.module.css';
import logo from '../../assets/images/4am-logo-1.jpg'

const Header = (props) => {
    return (
        <div className={styles['header-container']}>
            <div className={styles['header-content']}>
                <img src={logo} className={styles['header-img']}/>
                <nav className={styles['header-main_nav']}>
                    <ul className={styles['header-nav-list']}>
                        <li className={styles['header-nav-list-item']}><a href="index.html">Home</a></li>
                        <li className={styles['header-nav-list-item']}><a href="about.html">About us</a></li>
                        <li className={styles['header-nav-list-item']}><a href="services.html">Classes & Services</a></li>
                        <li className={styles['header-nav-list-item']}><a href="blog.html">Blog</a></li>
                        <li className={styles['header-nav-list-item']}><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>

                <div className={styles['header-phone-number']}>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <div>652-345 3222 11</div>
                </div>
            </div>
        </div>
    );
}

export default Header;