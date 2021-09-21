import Modal from '../Components/UI/Modal';
import {FaTimes} from 'react-icons/fa';
import styles from './AccountAction.module.css';
import { useState } from 'react';

const AccountAction = (props) => {
    const [actionType, setActionType] = useState('login');
    const btnPrimaryClassName = `${styles['button']} btn btn-primary`;
    const btnSecondaryClassName = `${styles['button']} btn btn-secondary`;
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
    }

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

                <button 
                    type="submit" 
                    onSubmit={onSubmitHandler}
                    className={btnPrimaryClassName}>{actionType==='login' ?  'Đăng nhập' : 'Đăng kí' }
                </button>
                <button 
                    type="submit" 
                    onClick={onSwitchAction}
                    className={btnSecondaryClassName}>{actionType==='login' ?  'Đăng kí' : 'Đăng nhập' }
                </button>
                
            </form>
        </Modal>
    );
}

export default AccountAction;