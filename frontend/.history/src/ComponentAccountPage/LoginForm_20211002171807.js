import { useState } from 'react';
import styles from './LoginForm.module.css';
import {FaEye, FaEyeSlash} from 'react-icons/fa';


const LoginForm = (props) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputTagClassName = `${styles['form-input']} form-control`;

    const onShowPasswordHandler = (e) => {
        setShowPassword(true);
    }

    const onHidePasswordHandler = () => {
        setShowPassword(false);
    }

    const message = "";
    return (
        <div className={styles['form-container']}>
            <form className={styles['form-group']}>
                <h1 className={styles['form-heading']}>Đăng nhập</h1>
                <div className={`form-group mt-4 ${styles['form-input']}`}>
                    <input type="text" className={inputTagClassName} id="username" name="username" placeholder="Nhập email" required/>
                </div>

                <div className={`form-group mt-4 ${styles['form-input']}`}>
                    <input type="password" className={inputTagClassName} id="password" name="password" placeholder="Nhập mật khẩu" required/>
                </div>

                {
                    message !== "" &&
                    <div className="form-group mt-4">
                        <label className="form-message">{message}</label>
                    </div>
                }

                <button type="submit" className={`btn btn-primary ${styles['submit-btn']}`}>Đăng nhập</button>
                <a href="/forgot-password" className={styles['forgot-password']}>Quên mật khẩu?</a>
            </form>
        </div>
    );
}

export default LoginForm;