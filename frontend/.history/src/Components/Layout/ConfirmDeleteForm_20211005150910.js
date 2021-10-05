import React from 'react';
import styles from './ConfirmDeleteForm.module.css';
import { FaTimes,FaTrashAlt,FaFileAlt,FaLongArrowAltRight } from 'react-icons/fa';

const ConfirmDeleteForm = (props) => {
    return (
        <div className={styles['modal']}>
            <div className={styles['form-container']}>
                <FaTimes className={styles['close-btn']} onClick={props.onHideDeleteForm}/>
                <h3 className={styles['form-container-alert']}>Bạn có chắc là muốn xóa mục này?</h3>
                <form action="" className={styles['delete-form']}></form>
                <FaFileAlt className={styles['file-icon']}/>
                <FaLongArrowAltRight className={styles['arrow-icon']}/>
                <FaTrashAlt className={styles['trash-icon']}/>
                <div className={styles['form-option']}>
                    <button type="button" className={`${styles['agree-btn']} btn btn-danger`}>Xóa</button>
                    <button type="button" className={`${styles['decline-btn']} btn btn-secondary`} onClick={props.onHideDeleteForm}>Hủy</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmDeleteForm
