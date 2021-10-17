import React from 'react';
import styles from './ConfirmDeleteForm.module.css';

const ConfirmDeleteForm = () => {
    return (
        <div className={styles['modal']}>
            <div className={styles['form-container']}>
                <h2 className={styles['form-container-alert']}>Bạn có chắc là muốn xóa mục này?</h2>
                <form action="" className={styles['delete-form']}></form>
            </div>
        </div>
    )
}

export default ConfirmDeleteForm
