import EditorJS from '@editorjs/editorjs';
import { Fragment } from 'react';
import reactDom from 'react-dom';

import styles from './CreateBlogForm.module.css';


const CreateBlogForm = (props) => {
    const portalElement = document.getElementById('editorjs');
    var editor = new EditorJS();
    console.log(editor)
    return (
        <div></div>
    );
}

export default CreateBlogForm;




