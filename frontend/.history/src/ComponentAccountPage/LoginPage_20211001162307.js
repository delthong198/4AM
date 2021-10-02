import React from 'react';
import styles from './LoginPage.module.css';
import LoginForm from './LoginForm';

const AccountPage = () => {
    return (
        <div  className={styles['account-page']}>
            <div className={styles['account-page-header']}></div>
            <div className={styles['account-page-body']}>
                <LoginForm />
            </div>
        </div>
    )
}

export default AccountPage;
