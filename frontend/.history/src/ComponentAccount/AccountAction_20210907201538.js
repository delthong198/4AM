import React from 'react';
import Modal from './Modal';
import {FaTimes} from 'react-icons/fa';
import styles from './AccountAction.module.css';

const AccountAction = (props) => {
    const message;
    return (
        <Modal onClose={props.onHideAccountHandler}>
            <FaTimes className={styles['close-btn']} onClick={props.onHideAccountHandler}/>
            <form>
                <div className="form-group mt-4">
                    <label htmlFor="username">Tên đăng nhập</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="Nhập email" required/>
                </div>

                <div className="form-group mt-4">
                    <label htmlFor="password">Mật khẩu</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Nhập mật khẩu" required/>
                </div>

                {/* <div className="form-group mt-4">
                    <label className="form-message">{{message}}</label>
                </div> */}

                <button type="submit" className="btn btn-primary">Đăng nhập</button>

            </form>
        </Modal>
    );
}

export default AccountAction;