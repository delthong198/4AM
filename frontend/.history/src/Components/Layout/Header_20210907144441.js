import styles from './Header.module.css';
import {logo} from '../../assets/images/4am-logo.jpg'

const Header = (props) => {
    return (
        <div className={styles['header-container']}>
            <img src={logo} className={styles['header-img']}/>
        </div>
    );
}

export default Header;