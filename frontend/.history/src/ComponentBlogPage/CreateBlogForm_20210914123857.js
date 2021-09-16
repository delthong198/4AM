import EditorJS from '@editorjs/editorjs';
import styles from './CreateBlogForm.module.css';


const CreateBlogForm = (props) => {
    const editorElementClassName = styles['editor'];
    var editorElement = document.createElement('div');
    editorElement.setAttribute('id','editorjs');
    editorElement.setAttribute('className',editorElementClassName);
    document.body.appendChild(editorElement);
    var editor = new EditorJS();
    return (
        <div></div>
    );
}

export default CreateBlogForm;




