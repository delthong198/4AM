import React from 'react';
import LoginForm from './LoginForm';
import { Link } from "react-router-dom";
import styles from './LoginPage.module.css';
import logo from '../assets/images/4am-logo.svg';

const AccountPage = () => {
    return (
        <div  className={styles['account-page']}>
            <div className={styles['account-page-header']}>
                <div className={styles['header-content']}>
                    <div className={styles['header-img-heading']}>
                        <img src={logo} alt='4AM logo' className={styles['header-img']}/>
                        <h2 className={styles['header-heading']}>Đăng nhập</h2>
                    </div>
                    <nav className={styles['header-main_nav']}>
                        <ul className={styles['header-nav-list']}>
                            <li className={styles['header-nav-list-item']}><Link to="/">Home</Link></li>
                            <li className={styles['header-nav-list-item']}><Link to="/video-category">Video</Link></li>
                            <li className={styles['header-nav-list-item']}><Link to="/blog-category">Blog</Link></li>
                        </ul>
                    </nav>

                    <div className={styles['header-account-action']}>
                        <a href="/login">Đăng ký</a>
                    </div>
                </div>
            </div>

            <div className={styles['account-page-body']}>
                <div className={styles['body-img-container']}>
                    <img src={logo} alt='4AM logo' className={styles['body-img']}/>
                </div>
                <LoginForm />
            </div>
        </div>
    )
}

export default AccountPage;
