import EditorJS from '@editorjs/editorjs';
import { Fragment } from 'react';
import reactDom from 'react-dom';

import styles from './CreateBlogForm.module.css';


const CreateBlogForm = (props) => {
    var editorElement = document.createElement('div');
    editorElement.setAttribute('id','editorjs')
    document.body.appendChild(editorElement);
    var editor = new EditorJS();
    return (
        <div></div>
    );
}

export default CreateBlogForm;




