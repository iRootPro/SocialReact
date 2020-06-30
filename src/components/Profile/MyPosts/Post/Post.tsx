import React from "react";
import classes from './Post.module.css'

export type PropsPostType = {
    id: number
    message: string
    like: number
}

const Post = (props: PropsPostType) => {
    return (

        <div className={classes.item}>
            {props.message}
            <div>
                <span>likes: {props.like}</span>
            </div>
        </div>

    )
}
export default Post