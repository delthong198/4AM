import {FaTimes} from 'react-icons/fa';
import Modal from '../Components/UI/Modal';
import styles from './AddVideoForm.module.css';

const AddVideoForm = (props) => {
    const message = "";
    const btnClassName = `${styles} btn btn-primary`;
    return (
        <Modal onClose={props.onHideAddVideoForm}>
            <FaTimes className={styles['close-btn']} onClick={props.onHideAddVideoForm}/>
            <form>
                <div className="form-group mt-4">
                    <label htmlFor="username">Tiêu đề Video</label>
                    <input type="text" className="form-control" id="username" name="username" placeholder="Nhập tiêu đề video" required/>
                </div>

                <div className="form-group mt-4">
                    <label htmlFor="description">Mô tả video</label>
                    <input type="password" className="form-control" id="description" name="description" placeholder="Nhập mô tả video" required/>
                </div>

                <div className="form-group mt-4">
                    <label className="form-message">{message}</label>
                </div>

                <button type="submit" className={btnClassName}>Tải lên</button>

            </form>
        </Modal>
    );
}

export default AddVideoForm;