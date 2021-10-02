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
                    <input type="password" className="form-control" id="password" name="password" placeholder="Nhập mật khẩu" required/>
                </div>

                {
                    message !== "" &&
                    <div className="form-group mt-4">
                        <label className="form-message">{message}</label>
                    </div>
                }

                <button type="submit" className={`btn btn-primary ${styles['submit-btn']}`}>Đăng nhập</button>
                <a href="#" className={styles['forgot-password']}>Quên mật khẩu?</a>
            </form>
        </div>
    );
}

export default RegisterForm;