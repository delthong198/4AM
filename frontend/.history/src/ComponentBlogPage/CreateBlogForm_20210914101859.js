import EditorJS from '@editorjs/editorjs';
import styles from './CreateBlogForm.module.css';
import Modal from '../Components/UI/Modal';

const editor = new EditorJS({
    tools: {
        header: {
            class: Header,
            inlineToolbar: ['link']
        },
        list: {
            class: List,
            inlineToolbar: [
                'link',
                'bold',
            ]
        },
        embed: {
            class: Embed,
            inlineToolbar: false,
            config: {
                services: {
                    youtube: true,
                    coub: true,
                }
            }
        }
    }
})

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




