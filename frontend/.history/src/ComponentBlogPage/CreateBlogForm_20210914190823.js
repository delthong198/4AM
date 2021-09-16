import EditorJS from '@editorjs/editorjs';
import styles from './CreateBlogForm.module.css';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import SimpleImage from '@editorjs/simple-image';
import { Fragment } from 'react';

const editorElementClassName = styles['editor'];
var editorElement = document.createElement('div');
editorElement.setAttribute('id','editorjs');
editorElement.setAttribute('class',editorElementClassName);
document.body.appendChild(editorElement);
const editor = new EditorJS(
    {
        holder: 'editorjs',
        tools: {
            header: {
                class: Header,
                config: {
                    placeholder: 'Enter a header',
                    levels: [1, 2, 3, 4, 5, 6],
                    defaultLevel: 3
                }
            },
            list: {
                class: List,
                inlineToolbar: true,
            },
            embed: {
                class: Embed,
                inlineToolbar: false,
                config: {
                    service: {
                        youtube: true,
                    }
                }
            },
            image: {
                class: SimpleImage,
                inlineToolbar: true
            }
        },
        data:{},
        onReady: ()=>{
    
        },
        onChange:() =>{
            onCreateBlogHandler();
        }
    });

const onCreateBlogHandler = () => {
    editor.save().then((outputData) => {
        console.log('Article data: ', outputData)
    }).catch((error) => {
        console.log('Saving failed: ', error)
    });
};
const CreateBlogForm = (props) => {
    const createBtnClassName = `${styles['create-btn']} btn btn-primary`;

    return (
        <Fragment>
            <h2 className={styles['create-blog-heading']}>Create Blog</h2>
            <button type="button" className={createBtnClassName} onClick={onCreateBlogHandler}>Create</button>
        </Fragment>
    );
}

export default CreateBlogForm;




