import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/state";


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

const Profile = (props: PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts state={props.state} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile