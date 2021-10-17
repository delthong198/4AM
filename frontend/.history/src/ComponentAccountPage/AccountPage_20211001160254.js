import React from 'react';
import styles from './AccountPage.module.css';
import AccountAction from './AccountAction';

const AccountPage = () => {
    return (
        <div  className={styles['account-page']}>
            <AccountAction />
        </div>
    )
}

export default AccountPage;