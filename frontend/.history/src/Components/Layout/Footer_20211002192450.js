import React from 'react';
import styles from './Footer.module.css';
import {FaFacebook} from 'react-icons/fa';


const Footer = () => {
    return (
        <div className={styles['footer']}>
            <div>
                <FaFacebook className={styles['footer-icon']}/>
                <a href="https://www.facebook.com/bongroquan12"  className={styles['footer-description']}>Câu lạc bộ bóng rổ 4AM</a>
            </div>
            {/* https://www.facebook.com/bongroquan12 */}
            {/* 033 863 8506 */}
        </div>
    )
}

export default Footer;
