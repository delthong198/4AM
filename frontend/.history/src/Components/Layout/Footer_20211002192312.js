import React from 'react';
import styles from './Footer.module.css';
import {FaFacebook} from 'react-icons/fa';


const Footer = () => {
    return (
        <div className={styles['footer']}>
            <div>
                <FaFacebook />
                <a href="https://www.facebook.com/bongroquan12">Câu lạc bộ bóng rổ 4AM</a>
            </div>
            {/* https://www.facebook.com/bongroquan12 */}
            {/* 033 863 8506 */}
        </div>
    )
}

export default Footer;
