import React from "react";
import Post, {PropsPostType} from "./Post/Post";
import s from './MyPosts.module.css'

const MyPosts = () => {

    let postsData: Array<PropsPostType> = [
        { id: 1, message: 'Hi, how are you?', like: 15},
        { id: 2, message: 'My first post', like: 25}
    ]

    let postElements = postsData.map(post => <Post message={post.message} like={post.like} id={post.id}/>)

    return (

        <div className={s.postsBlock}>
            <h2>My post</h2>
            <div><textarea></textarea></div>
            <div>
                <button>Add post</button>
            </div>
            <div className={'post'}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts