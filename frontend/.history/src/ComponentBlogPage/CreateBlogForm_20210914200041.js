import EditorJS from '@editorjs/editorjs';
import styles from './CreateBlogForm.module.css';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import SimpleImage from '@editorjs/simple-image';
import { Fragment } from 'react';


const CreateBlogForm = (props) => {
    const createBtnClassName = `${styles['create-btn']} btn btn-primary`;
    const editorElementClassName = styles['editor'];
    var editorElement = document.createElement('div');
    editorElement.id = 'editorjs';
    editorElement.class = editorElementClassName;
    document.body.appendChild(editorElement);

    var createBtn = document.createElement('BUTTON');
    createBtn.class = `${styles['create-btn']} btn btn-primary`;
    createBtn.id = 'create-btn';
    document.body.appendChild(createBtn);
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
    });
    const onCreateBlogHandler = async () => {
        try {
            const outputData = await editor.saver.save()
            console.log('Article data: ', outputData)
        } catch (e) {
            console.log('Saving failed: ', e)
        }
    };

    createBtn.addEventListener('click', () => {
        editor.save().then((data) => {console.log('Article data: ', data)})
    })
    return (
        <Fragment>
            <h2 className={styles['create-blog-heading']}>Create Blog</h2>
        </Fragment>
    );
}

export default CreateBlogForm;




