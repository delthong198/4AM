import EditorJS from '@editorjs/editorjs';
import styles from './CreateBlogForm.module.css';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';

const CreateBlogForm = (props) => {
    const editorElementClassName = styles['editor'];
    var editorElement = document.createElement('div');
    editorElement.setAttribute('id','editorjs');
    editorElement.setAttribute('class',editorElementClassName);
    document.body.appendChild(editorElement);
    var editor = new EditorJS(
        {
            holder: 'editorjs',
            tools: {
                header: {
                    class: Header,
                    config: {
                      placeholder: 'Enter a header',
                      levels: [2, 3, 4],
                      defaultLevel: 3
                    }
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
                        service: {
                            youtube: true,
                        }
                    }
                }
            }
        }
    );
    return (
        <div></div>
    );
}

export default CreateBlogForm;




