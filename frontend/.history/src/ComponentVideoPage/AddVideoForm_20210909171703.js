import Modal from '../Components/UI/Modal';
import styles from './AddVideoForm.module.css';

const AddVideoForm = (props) => {
    const message = "";
    const btnClassName = `${styles}`;
    return (
        <Modal onClose={props.onHideAccountHandler}>
            <FaTimes className={styles['close-btn']} onClick={props.onHideAccountHandler}/>
            <form>
                <div className="form-group mt-4">
                    <label htmlFor="username">Tiêu đề Video</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="Nhập email" required/>
                </div>

                <div className="form-group mt-4">
                    <label htmlFor="password">Mô tả video</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Nhập mật khẩu" required/>
                </div>

                <div className="form-group mt-4">
                    <label className="form-message">{message}</label>
                </div>

                <button type="submit" className="btn btn-primary">Tải lên</button>

            </form>
        </Modal>
    );
}

export default AddVideoForm;