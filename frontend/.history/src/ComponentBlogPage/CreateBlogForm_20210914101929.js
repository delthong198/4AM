import EditorJS from '@editorjs/editorjs';
import styles from './CreateBlogForm.module.css';
import Modal from '../Components/UI/Modal';

var editor = new EditorJS();

const CreateBlogForm = (props) => {
    return (
        <Modal>
            <div id='editorjs'>
                {editor}
            </div>
        </Modal>
    );
}

export default CreateBlogForm;




