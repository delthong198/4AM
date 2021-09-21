import Modal from '../Components/UI/Modal';
import {FaTimes} from 'react-icons/fa';
import styles from './AccountAction.module.css';
import { useState } from 'react';

const AccountAction = (props) => {
    const [actionType, setActionType] = useState('login')
    const message = "";
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

                {
                    actionType==='register' &&
                    <div className="form-group mt-4">
                        <label htmlFor="eval-password">Nhập lại mật khẩu</label>
                        <input type="password" className="form-control" id="eval-password" name="eval-password" placeholder="Nhập lại mật khẩu" required/>
                    </div>
                }

                <div className="form-group mt-4">
                    <label className="form-message">{message}</label>
                </div>

                <button type="submit" className="btn btn-primary">{actionType==='login' ?  'Đăng nhập' : 'Đăng kí' }</button>
            </form>
        </Modal>
    );
}

export default AccountAction;