import styles from './RegisterForm.module.css';
import { useState } from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa';

const RegisterForm = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const [showEvalPassword, setShowEvalPassword] = useState(false);
    // const btnPrimaryClassName = `${styles['button']} btn btn-primary`;
    // const btnSecondaryClassName = `${styles['button']} btn btn-secondary`;
    const inputTagClassName = `${styles['form-input']} form-control`

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

    const checkMatchedEvalPasswordOnChange = (e) => {
        const checkPassMessage = document.querySelector('.form-message');
        let check = 1;
        if (newPasswordLength) {
            var inputPass = e.target.value;
            for (var i = 0; i < inputPass.length; i++)
            {
                if (inputPass[i] === newPasswordValue[i])
                {
                    check = check * 1;
                    if (inputPass.length === newPasswordLength && check === 1)
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
                    check = check * 0;
                    checkPassMessage.textContent = 'Mật khẩu không khớp!';
                    if(checkPassMessage.classList.contains(styles['match-pass']))
                    {
                        checkPassMessage.classList.remove(styles['match-pass']);
                    }
                    checkPassMessage.classList.add(styles['unmatch-pass']);
                }
            }
        }
    }

    const checkMatchedEvalPasswordOnBlur = (e) => {
        const evalPassword = e.target.value;
        const checkPassMessage = document.querySelector('.form-message');
        if (evalPassword.length !== newPasswordLength) {
            checkPassMessage.textContent = 'Mật khẩu không khớp!';
            checkPassMessage.classList.add(styles['unmatch-pass']);
        }
        else if (evalPassword.length === newPasswordLength) {
            let check = true;
            for (var i = 0; i < evalPassword.length; i++)
            {
               if (evalPassword[i] !== newPasswordValue[i]) {
                    check = false;
                }
            }
            if (check) {
                checkPassMessage.textContent = 'Mật khẩu trùng khớp.';
                if(checkPassMessage.classList.contains(styles['unmatch-pass']))
                {
                    checkPassMessage.classList.remove(styles['unmatch-pass']);
                }
                checkPassMessage.classList.add(styles['match-pass']);
            } else {
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
        <div className={styles['form-container']}>
            <form className={styles['form-group']}>
                <h1 className={styles['form-heading']}>Đăng ký</h1>
                <div className={`form-group mt-4 ${styles['form-input']}`}>
                    <input type="text" className="form-control" id="username" name="username" placeholder="Nhập email" required/>
                </div>

                <div className={`form-group mt-4 ${styles['form-input']}`}>
                    <div className={styles['enter-password-container']}>
                        <input type={showPassword ? "text" : "password"} className={inputTagClassName} id="password pass0" name="password" placeholder="Nhập mật khẩu" required onChange={enterPasswordHandler}/>
                        <FaEye className={showPassword ? styles['hide'] : styles['unhide-password-button']} onClick={onShowPasswordHandler}/>
                        <FaEyeSlash className={showPassword ? styles['hide-password-button'] : styles['hide']} onClick={onHidePasswordHandler}/>
                    </div>
                </div>

                <div className={`form-group mt-4 ${styles['form-input']}`}>
                    <div className={styles['enter-password-container']}>
                        <input type={showEvalPassword ? "text" : "password"} className={inputTagClassName} id="eval-password pass1" name="eval-password" placeholder="Nhập lại mật khẩu" onChange={checkMatchedEvalPasswordOnChange} onBlur={checkMatchedEvalPasswordOnBlur} required/>
                        <FaEye className={showEvalPassword ? styles['hide'] : styles['unhide-password-button']} onClick={onShowEvalPasswordHandler}/>
                        <FaEyeSlash className={showEvalPassword ? styles['unhide-password-button'] : styles['hide']} onClick={onHideEvalPasswordHandler}/>
                    </div>
                </div>

                <div className="form-group mt-4">
                    <p className="form-message"></p>
                </div>

                <button type="submit" className={`btn btn-primary ${styles['submit-btn']}`}>Đăng ký</button>
            </form>
        </div>
    );
}

export default RegisterForm;