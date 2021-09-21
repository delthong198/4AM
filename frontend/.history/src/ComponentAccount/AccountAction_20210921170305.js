import Modal from '../Components/UI/Modal';
import {FaTimes, FaEye, FaEyeSlash} from 'react-icons/fa';
import styles from './AccountAction.module.css';
import { useState } from 'react';

const AccountAction = (props) => {
    const [actionType, setActionType] = useState('login');
    const [showPassword, setShowPassword] = useState(false);
    const [showEvalPassword, setShowEvalPassword] = useState(false);

    const btnPrimaryClassName = `${styles['button']} btn btn-primary`;
    const btnSecondaryClassName = `${styles['button']} btn btn-secondary`;
    const inputTagClassName = `${styles['input-form']} form-control`

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

    const onShowPasswordHandler = (e) => {
        setShowPassword(true);
    }

    const onHidePasswordHandler = () => {
        setShowPassword(false);
    }

    const onShowEvalPasswordHandler = (e) => {
        setShowEvalPassword(true);
    }

    const onHideEvalPasswordHandler = () => {
        setShowEvalPassword(false);
    }

    var newPasswordLength, newPasswordValue;
    const enterPasswordHandler = (e) => {
        newPasswordLength = e.target.value.length;
        newPasswordValue = e.target.value;
    }

    const checkPassMessage = document.querySelector('.form-message');

    const checkMatchedEvalPasswordHandler = (e) => {
        var inputPass = e.target.value;
        for (var i = 0; i < inputPass.length; i++)
        {
            if (inputPass[i] === newPasswordValue[i])
            {
                if (inputPass.length === newPasswordLength)
                {
                    checkPassMessage.textContent = 'Mật khẩu trùng khớp.';
                    if(checkPassMessage.classList.contains(styles['unmatch-pass']))
                    {
                        checkPassMessage.classList.remove(styles['unmatch-pass']);
                    }
                    checkPassMessage.classList.add(styles['match-pass']);
                }
                else {
                    checkPassMessage.textContent = 'Mật khẩu khớp nhưng chưa đủ.';
                    if(checkPassMessage.classList.contains(styles['match-pass']))
                    {
                        checkPassMessage.classList.remove(styles['match-pass']);
                    }
                    checkPassMessage.classList.add(styles['unmatch-pass']);
                }
            }
            else {
                checkPassMessage.textContent = 'Mật khẩu không khớp!';
                if(checkPassMessage.classList.contains(styles['match-pass']))
                {
                    checkPassMessage.classList.remove(styles['match-pass']);
                }
                checkPassMessage.classList.add(styles['unmatch-pass']);
            }
        }
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
                        <input type={showPassword ? "text" : "password"} className={inputTagClassName} id="password pass0" name="password" placeholder="Nhập mật khẩu" required onChange={actionType === 'register' && enterPasswordHandler}/>
                        <FaEye className={showPassword ? styles['hide'] : styles['unhide-password-button']} onClick={onShowPasswordHandler}/>
                        <FaEyeSlash className={showPassword ? styles['hide-password-button'] : styles['hide']} onClick={onHidePasswordHandler}/>
                    </div>
                </div>

                {
                    actionType==='register' &&
                    <div className="form-group mt-4">
                        <label htmlFor="eval-password">Nhập lại mật khẩu</label>
                        <div className={styles['enter-password-container']}>
                            <input type={showEvalPassword ? "text" : "password"} className={inputTagClassName} id="eval-password pass1" name="eval-password" placeholder="Nhập lại mật khẩu" onChange={checkMatchedEvalPasswordHandler} required/>
                            <FaEye className={showEvalPassword ? styles['hide'] : styles['unhide-password-button']} onClick={onShowEvalPasswordHandler}/>
                            <FaEyeSlash className={showEvalPassword ? styles['unhide-password-button'] : styles['hide']} onClick={onHideEvalPasswordHandler}/>
                        </div>
                    </div>
                }

                <div className="form-group mt-4">
                    <label className="form-message"></label>
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