import {FaTimes} from 'react-icons/fa';
import styles from './AddVideoForm.module.css';

const AddVideoForm = (props) => {
    const message = "";
    const btnClassName = `${styles['upload-btn']} btn btn-primary`;
    return (
            <div className={styles['add--video-page']}>
                <FaTimes className={styles['close-btn']} onClick={props.onHideAddVideoForm}/>
                <form className={styles['add-video-form']}>
                    <div className="form-group mt-4">
                        <label htmlFor="username">Tiêu đề Video</label>
                        <input type="text" className="form-control" id="username" name="username" placeholder="Nhập tiêu đề video" required/>
                    </div>

                    <div className="form-group mt-4">
                        <label htmlFor="description">Mô tả video</label>
                        <input type="text" className="form-control" id="description" name="description" placeholder="Nhập mô tả video" required/>
                    </div>

                    <div className="form-group mt-4">
                        <label htmlFor="videoID">ID video</label>
                        <input type="text" className="form-control" id="videoID" name="videoID" placeholder="Nhập id của video từ youtube" required/>
                    </div>

                    <div className="form-group mt-4">
                        <label className="form-message">{message}</label>
                    </div>

                    <button type="submit" className={btnClassName}>Tải lên</button>

                </form>
            </div>
                

    );
}

export default AddVideoForm;