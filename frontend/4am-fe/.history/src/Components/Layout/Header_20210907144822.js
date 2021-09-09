import styles from './Header.module.css';
import logo from '../../assets/images/4am-logo.jpg'

const Header = (props) => {
    return (
        <div className={styles['header-container']}>
            <div className={styles['header-content']}></div>
            <img src={logo} className={styles['header-img']}/>
        </div>
    );
}

export default Header;