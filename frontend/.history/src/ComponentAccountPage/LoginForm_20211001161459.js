import styles from './LoginForm.module.css';

const LoginForm = (props) => {
    const message = "";
    return (
        <div className={styles['form-container']}>
            <form>
                <h1>Đăng nhập</h1>
                <div className="form-group mt-4">
                    <input type="text" className="form-control" id="username" name="username" placeholder="Nhập email" required/>
                </div>

                <div className="form-group mt-4">
                    <label htmlFor="password">Mật khẩu</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Nhập mật khẩu" required/>
                </div>

                <div className="form-group mt-4">
                    <label className="form-message">{message}</label>
                </div>

                <button type="submit" className="btn btn-primary">Đăng nhập</button>
            </form>
        </div>
    );
}

export default LoginForm;