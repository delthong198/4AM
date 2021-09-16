import EditorJS from '@editorjs/editorjs';
import styles from './CreateBlogForm.module.css';
import Modal from '../Components/UI/Modal';


const CreateBlogForm = (props) => {
    var editor = new EditorJS();
    return (
        <Modal>
            <div id='editorjs'>
                {editor}
            </div>
        </Modal>
    );
}

export default CreateBlogForm;




