import styles from './CreateBlogPage.module.css';
import { useForm } from "react-hook-form";
import Header from '../Components/Layout/Header';
import Footer from '../Components/Layout/Footer';


import React from 'react'

const CreateBlogPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const inputTagClassName = `${styles['form-input']} form-control`;

    return (
        <div className={styles['create-blog-page']}>
            <Header />
            <div className={styles['form-container']}>
                <form onSubmit={handleSubmit(onSubmit)} className={styles['form-group']}>
                    <h1 className={styles['form-heading']}>Tạo blog</h1>
                    <div className={styles['title-and-type']}>
                        <div className={`form-group mt-4 ${styles['form-input']} ${styles['blog-title-input']}`}>
                            <input type="text" className={inputTagClassName} id="BlogTitle" name="BlogTitle" placeholder="Nhập tiêu đề" {...register('BlogTitle', {required: true})}/>
                        </div>

                        <div className={`form-group mt-4 ${styles['form-input']} ${styles['blog-title-input']}`}>
                            <select {...register("BlogType")}>
                                <option value="Basketball">Basketball</option>
                                <option value="Calisthenic">Calisthenic</option>
                            </select>
                        </div>
                    </div>

                    <div className={`form-group mt-4 ${styles['form-input']}`}>
                        <textarea className={inputTagClassName + ` ${styles['blog-content-input']}`} id="BlogContent" name="BlogContent" placeholder="Nhập nội dung" {...register('BlogContent', {required: true})}></textarea>
                    </div>

                    <button type="submit" className={`btn btn-primary ${styles['submit-btn']}`}>Tạo Blog</button>
                    {errors.exampleRequired && <span>This field is required</span>}
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default CreateBlogPage
