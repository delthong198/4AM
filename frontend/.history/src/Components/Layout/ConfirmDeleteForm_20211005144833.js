import React from 'react';
import styles from './ConfirmDeleteForm.module.css';
import { FaTimes } from 'react-icons/fa';

const ConfirmDeleteForm = () => {
    return (
        <div className={styles['modal']}>
            <div className={styles['form-container']}>
                <FaTimes className={styles['close-btn']} />
                <h3 className={styles['form-container-alert']}>Bạn có chắc là muốn xóa mục này?</h3>
                <form action="" className={styles['delete-form']}></form>
                <div className={styles['form-option']}>
                    <button type="button" className={`${styles['agree-btn']} btn btn-danger`}>Success</button>
                    <button type="button" className={`${styles['decline-btn']} btn btn-secondary`}>Danger</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDeleteForm
