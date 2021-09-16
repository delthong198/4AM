import EditorJS from '@editorjs/editorjs';
import styles from './CreateBlogForm.module.css';


const CreateBlogForm = (props) => {
    var editor = new EditorJS();
    console.log(editor)
    return (
        <div id='editorjs'>
            {editor.map(element => <div>{element}</div>)}
        </div>
    );
}

export default CreateBlogForm;




