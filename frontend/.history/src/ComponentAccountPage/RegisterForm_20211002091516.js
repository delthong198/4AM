import styles from './RegisterForm.module.css';

const RegisterForm = (props) => {
    const message = "";
    return (
        <div className={styles['form-container']}>
            <form className={styles['form-group']}>
                <h1 className={styles['form-heading']}>Đăng nhập</h1>
                <div className={`form-group mt-4 ${styles['form-input']}`}>
                    <input type="text" className="form-control" id="username" name="username" placeholder="Nhập email" required/>
                </div>

                <div className={`form-group mt-4 ${styles['form-input']}`}>
                    <div className={styles['enter-password-container']}>
                        <input type={showPassword ? "text" : "password"} className={inputTagClassName} id="password pass0" name="password" placeholder="Nhập mật khẩu" required onChange={actionType === 'register' ? enterPasswordHandler : ()=>{}}/>
                        <FaEye className={showPassword ? styles['hide'] : styles['unhide-password-button']} onClick={onShowPasswordHandler}/>
                        <FaEyeSlash className={showPassword ? styles['hide-password-button'] : styles['hide']} onClick={onHidePasswordHandler}/>
                    </div>
                </div>

                <div className="form-group mt-4">
                    <div className={styles['enter-password-container']}>
                        <input type={showEvalPassword ? "text" : "password"} className={inputTagClassName} id="eval-password pass1" name="eval-password" placeholder="Nhập lại mật khẩu" onChange={checkMatchedEvalPasswordHandler} required/>
                        <FaEye className={showEvalPassword ? styles['hide'] : styles['unhide-password-button']} onClick={onShowEvalPasswordHandler}/>
                        <FaEyeSlash className={showEvalPassword ? styles['unhide-password-button'] : styles['hide']} onClick={onHideEvalPasswordHandler}/>
                    </div>
                </div>

                {
                    message !== "" &&
                    <div className="form-group mt-4">
                        <p className="form-message">{message}</p>
                    </div>
                }

                <button type="submit" className={`btn btn-primary ${styles['submit-btn']}`}>Đăng nhập</button>
                <a href="#" className={styles['forgot-password']}>Quên mật khẩu?</a>
            </form>
        </div>
    );
}

export default RegisterForm;