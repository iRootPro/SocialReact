import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, StoreType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


type PropsType = {
    state: TypePosts
    dispatch: (action: ActionType) => void
}

type TypePosts = {
    posts: Array<Posts>
    newPostText: string
}

type Posts = {
    id: number
    message: string
    like: number
}
const Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile