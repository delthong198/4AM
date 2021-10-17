import React from 'react';
import styles from './Footer.module.css';
import {FaFacebook,FaPhone} from 'react-icons/fa';


const Footer = (props) => {
    const footerClassName = `${styles['footer']} ${styles[props.option]}`

    return (
        <div className={footerClassName}>
            <div className={styles['footer-item']}>
                <FaFacebook className={styles['footer-icon']}/>
                <a href="https://www.facebook.com/bongroquan12"  className={styles['footer-description']}>Câu lạc bộ bóng rổ 4AM</a>
            </div>

            <div className={styles['footer-item']}>
                <FaPhone className={styles['footer-icon']}/>
                <a href="tel:+84338638506"  className={styles['footer-description']}>033 863 8506</a>
            </div>

            <div className={styles['footer-item']}>
                <FaFacebook className={styles['footer-icon']}/>
                <a href="https://www.facebook.com/bongrostreetworkout"  className={styles['footer-description']}>4AM</a>
            </div>
        </div>
    )
}

export default Footer;
