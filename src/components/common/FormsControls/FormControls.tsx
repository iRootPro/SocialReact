import React from "react";
import styles from "./FormControls.module.css"

const FormControl = ({input, meta, ...props} : any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError &&  <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props : any) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...props.input} {...props.meta} {...restProps}/></FormControl>
}


export const Input = (props: any) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...props.input} {...props.meta} {...restProps}/></FormControl>
}