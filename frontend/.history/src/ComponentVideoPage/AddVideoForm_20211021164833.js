import styles from './AddVideoForm.module.css';

const AddVideoForm = (props) => {
    const message = "";
    const btnClassName = `${styles['upload-btn']} btn btn-primary`;
    const inputTagClassName = `${styles['form-input']} form-control`;
    return (
            <div className={styles['add-video-page']}>
                <div className={styles['form-container']}>
                    <form className={styles['form-group']}>
                        <div className={`form-group mt-4 ${styles['form-input']}`}>
                            <input type="text" className={inputTagClassName} placeholder="Nhập tiêu đề video" required/>
                        </div>

                        <div className="form-group mt-4">
                            <textarea className={inputTagClassName + ` ${styles['video-content-input']}`} id="videoContent" name="videoContent" placeholder="Nhập nội dung" ></textarea>
                        </div>

                        <div className="form-group mt-4">
                            <input type="text" className={inputTagClassName} placeholder="Nhập đường dẫn video" required/>
                        </div>

                        <div className="form-group mt-4">
                            <label className="form-message">{message}</label>
                        </div>

                        <button type="submit" className={btnClassName}>Tải lên</button>
                    </form>
                </div>
            </div>
    );
}

export default AddVideoForm;