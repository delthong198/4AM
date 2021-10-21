import styles from './CreateBlogPage.module.css';
import { useForm } from "react-hook-form";

import React from 'react'

const CreateBlogPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const inputTagClassName = `${styles['form-input']} form-control`;

    return (
        <div className={styles['create-blog-page']}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles['form-group']}>
                <h1 className={styles['form-heading']}>Tạo blog</h1>
                <div className={`form-group mt-4 ${styles['form-input']}`}>
                    <input type="text" className={inputTagClassName} id="BlogTitle" name="BlogTitle" placeholder="Nhập tiêu đề" ref={register} required/>
                </div>

                <div className={`form-group mt-4 ${styles['form-input']}`}>
                    <textarea className={inputTagClassName} id="BlogContent" name="BlogContent" placeholder="Nhập nội dung" ref={register} required></textarea>
                </div>

                <button type="submit" className={`btn btn-primary ${styles['submit-btn']}`}>Tạo Blog</button>
                {errors.exampleRequired && <span>This field is required</span>}
            </form>
        </div>
    )
}

export default CreateBlogPage
