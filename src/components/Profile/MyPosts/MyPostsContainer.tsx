import React from "react";
import {
    ActionType,
    postsType,
} from "../../../redux/store";
import {updateNewPostTextActionCreator, addPostActionCreator} from "../../../redux/profile-redicer";
import MyPosts from "./MyPosts";
import {StoreContext} from "../../../StoreContext";

export type PropsType = {
    state: postsType
    dispatch: (action: ActionType) => void
}

const MyPostsContainer = (props: any) => {

    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState()
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextActionCreator(text))

                }
                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}
export default MyPostsContainer