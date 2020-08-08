import React from "react";
import Post, {PropsPostType} from "./Post/Post";
import s from './MyPosts.module.css'

export type PropsType = {
    posts: Array<PropsPostType>
    updateNewPostText: (text: string) => void
    addPost: () => void
    newPostText: string
}

const MyPosts = (props: PropsType) => {
    let postElements = props.posts.map(post => <Post key={post.id} message={post.message} like={post.like}
                                                           id={post.id}/>)
    let newElementFromTextArea = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        if (newElementFromTextArea.current) {
            let text: string = newElementFromTextArea.current.value
            props.updateNewPostText(text)
        }

    }

    return (
        <div className={s.postsBlock}>
            <h2>My post</h2>
            <div><textarea onChange={onPostChange} ref={newElementFromTextArea} value={props.newPostText}/></div>
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