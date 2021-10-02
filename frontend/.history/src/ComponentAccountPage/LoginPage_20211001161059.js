import React from 'react';
import styles from './LoginPage.module.css';
import LoginForm from './LoginForm';

const AccountPage = () => {
    return (
        <div  className={styles['account-page']}>
            <LoginForm />
        </div>
    )
}

export default AccountPage;
