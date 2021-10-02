import React from 'react';
import RegisterForm from './RegisterForm';
import { Link } from "react-router-dom";
import styles from './RegisterPage.module.css';
import Footer from '../Components/Layout/Footer';
import logo from '../assets/images/4am-logo-cut.png';

const RegisterPage = () => {
    return (
        <div  className={styles['account-page']}>
            <div className={styles['account-page-header']}>
                <div className={styles['header-content']}>
                    <div className={styles['header-img-heading']}>
                        <img src={logo} alt='4AM logo' className={styles['header-img']}/>
                        <h2 className={styles['header-heading']}>Đăng ký</h2>
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
                </div>
            </div>

            <div className={styles['account-page-body']}>
                <div className={styles['body-img-container']}>
                    <img src={logo} alt='4AM logo' className={styles['body-img']}/>
                </div>
                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterPage;
