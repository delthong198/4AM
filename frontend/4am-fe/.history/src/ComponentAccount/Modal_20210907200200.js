import reactDom from 'react-dom';
import styles from './Modal.module.css';
import { Fragment } from 'react';

const BackDrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose}/>
}

const ModalOverlay = (props) => {
    return (
        <div className={styles.modal} onClick={props.onClose}>
            <div className={styles.content}>
                {props.children}
            </div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {reactDom.createPortal(<BackDrop onClose={props.onClose}/>, portalElement)};
            {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    );
};

export default Modal;