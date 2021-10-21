import styles from './CreateBlogPage.module.css';
import { useForm } from "react-hook-form";

import React from 'react'

const CreateBlogPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className={`$styles['create-blog-page']}`>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <input defaultValue="test" {...register("example")} />
                
                {/* include validation with required or other standard HTML validation rules */}
                <input {...register("exampleRequired", { required: true })} />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                
                <input type="submit" />
            </form>
        </div>
    )
}

export default CreateBlogPage
