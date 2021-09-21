import Modal from '../Components/UI/Modal';
import {FaTimes, FaEye, FaEyeSlash} from 'react-icons/fa';
import styles from './AccountAction.module.css';
import { useState } from 'react';

const AccountAction = (props) => {
    const [actionType, setActionType] = useState('login');
    const btnPrimaryClassName = `${styles['button']} btn btn-primary`;
    const btnSecondaryClassName = `${styles['button']} btn btn-secondary`;
    const inputTagClassName = `${styles['input-form']} form-control`
    const [message, setMessage] = useState('');

    const onSwitchAction = () => {
        setActionType((prevState) => {
            if(prevState==='login') {
                return 'register'
            }
            return 'login'
        })
    }

    const onSubmitHandler = () => {
        var formData = new FormData(document.querySelector('#login-form'));
        console.log(formData.get('username'));
    }

    const onShowPasswordHandler = (e, data) => {
        console.log(data)
    }

    const onHidePasswordHandler = () => {

    }

    return (
        <Modal onClose={props.onHideAccountHandler}>
            <FaTimes className={styles['close-btn']} onClick={props.onHideAccountHandler}/>
            <form id="login-form">
                <div className="form-group mt-4">
                    <label htmlFor="username">Tên đăng nhập</label>
                    <input type="text" className={inputTagClassName} id="username" name="username" placeholder="Nhập email" required/>
                </div>

                <div className="form-group mt-4">
                    <label htmlFor="password">Mật khẩu</label>
                    <div className={styles['enter-password-container']}>
                        <input type="password" className={inputTagClassName} id="password pass0" name="password" placeholder="Nhập mật khẩu" required/>
                        <FaEye id="unhide-btn-0" className={styles['unhide-password-button']} onClick={onShowPasswordHandler}/>
                        <FaEyeSlash id="hide-btn-0" className={styles['hide-password-button']} onClick={onHidePasswordHandler}/>
                    </div>
                </div>

                {
                    actionType==='register' &&
                    <div className="form-group mt-4">
                        <label htmlFor="eval-password">Nhập lại mật khẩu</label>
                        <div className={styles['enter-password-container']}>
                            <input type="password" className={inputTagClassName} id="eval-password pass1" name="eval-password" placeholder="Nhập lại mật khẩu" required/>
                            <FaEye id="unhide-btn-1" className={styles['unhide-password-button']} onClick={onShowPasswordHandler}/>
                            <FaEyeSlash id="hide-btn-1" className={styles['hide-password-button']} onClick={onHidePasswordHandler}/>
                        </div>
                    </div>
                }

                <div className="form-group mt-4">
                    <label className="form-message">{message}</label>
                </div>

                <button 
                    type="button" 
                    onClick={onSubmitHandler}
                    className={btnPrimaryClassName}>{actionType==='login' ?  'Đăng nhập' : 'Đăng kí' }
                </button>
                <button 
                    type="button" 
                    onClick={onSwitchAction}
                    className={btnSecondaryClassName}>{actionType==='login' ?  'Đăng kí' : 'Đăng nhập' }
                </button>
                
            </form>
        </Modal>
    );
}

export default AccountAction;