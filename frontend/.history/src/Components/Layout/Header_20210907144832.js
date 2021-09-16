import styles from './Header.module.css';
import logo from '../../assets/images/4am-logo.jpg'

const Header = (props) => {
    return (
        <div className={styles['header-container']}>
            <div className={styles['header-content']}>
                <img src={logo} className={styles['header-img']}/>
            </div>
        </div>
    );
}

export default Header;