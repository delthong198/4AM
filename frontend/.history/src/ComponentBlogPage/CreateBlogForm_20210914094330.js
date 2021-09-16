import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header'; 
// import Link from '@editorjs/link'; 
import List from '@editorjs/list'; 
import Embed from '@editorjs/embed'; 
// import Image from '@editorjs/image';
import styles from './CreateBlogForm.module.css';
import Modal from '../Components/UI/Modal';

const editor = new EditorJS({
    holderID: 'editorjs',

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
            {editor}
        </Modal>
    );
}

export default CreateBlogForm;




