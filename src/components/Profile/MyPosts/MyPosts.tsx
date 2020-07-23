import React from "react";
import Post, {PropsPostType} from "./Post/Post";
import s from './MyPosts.module.css'
import {
    ActionType,
    addPostActionCreator,
    postsType, updateNewPostTextActionCreator,
} from "../../../redux/state";

export type PropsType = {
    state: postsType
    dispatch: (action: ActionType) => void
}




const MyPosts = (props: PropsType) => {
    let postElements = props.state.posts.map(post => <Post key={post.id} message={post.message} like={post.like}
                                                           id={post.id}/>)
    let newElementFromTextArea = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        if (newElementFromTextArea.current) {
            let text: string = newElementFromTextArea.current.value
            props.dispatch(updateNewPostTextActionCreator(text))
        }

    }

    return (
        <div className={s.postsBlock}>
            <h2>My post</h2>
            <div><textarea onChange={onPostChange} ref={newElementFromTextArea} value={props.state.newPostText}/></div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={'post'}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts