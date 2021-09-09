import React from 'react';
import Modal from './Modal';

const AccountAction = (props) => {
    return (
        <form method="post" action="/login" id="login-form">
            <div className="form-group mt-4">
                <label htmlFor="username">Tên đăng nhập</label>
                <input type="text" className="form-control" id="username" name="username" placeholder="Nhập tên đăng nhập"/>
            </div>

            <div className="form-group mt-4">
                <label htmlFor="password">Mật khẩu</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="Nhập mật khẩu"/>
            </div>

            <div className="form-group mt-4">
                <label className="form-message">{{message}}</label>
            </div>

            <button type="submit" className="btn btn-primary">Đăng nhập</button>

        </form>
    );
}

export default AccountAction;