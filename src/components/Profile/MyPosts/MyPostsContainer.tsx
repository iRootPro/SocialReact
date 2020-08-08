import React from "react";
import {
    ActionType,
    postsType, StoreType,
} from "../../../redux/store";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profile-redicer";
import MyPosts from "./MyPosts";

export type PropsType = {
    state: postsType
    dispatch: (action: ActionType) => void
}

const MyPostsContainer = (props: any) => {
    let state = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))

    }
    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}/>
    )
}
export default MyPostsContainer