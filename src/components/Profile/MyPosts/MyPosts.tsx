import React from "react";
import Post, {PropsPostType} from "./Post/Post";
import s from './MyPosts.module.css'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import {Textarea} from "../../common/FormsControls/FormControls";

export type PropsType = {
    posts: Array<PropsPostType>
    addPost: (newText: string) => void
}

const MyPosts = (props: PropsType) => {
    let postElements = props.posts.map(post => <Post key={post.id} message={post.message} like={post.like}
                                                     id={post.id}/>)

    const addPost = (value: AddNewPostFormType) => {
        props.addPost(value.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h2>My post</h2>
            <AddNewPostFormRedux onSubmit={addPost}/>
            <div className={'post'}>
                {postElements}
            </div>
        </div>
    )
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm = (props: any) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div><Field name={'newPostText'} component={Textarea} validate={[required, maxLength10]}/>
             </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )

}

let AddNewPostFormRedux = reduxForm<AddNewPostFormType>({form: 'ProfileAddNewPostForm'})(AddNewPostForm)
export default MyPosts

//types

type AddNewPostFormType = {
    newPostText: string
}