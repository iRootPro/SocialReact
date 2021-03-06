import {ActionType, postsType} from "./store";
import {ProfileType} from "../components/Profile/Profile";
import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', like: 15},
        {id: 2, message: 'My first post', like: 25}
    ],
    profile: null,
    status: ''
}

export const profileReducer = (state: postsType = initState, action: ActionType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                like: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ''}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return {...state}
    }
}

export const addPostActionCreator = (newPostText: string) => ({type: ADD_POST, newPostText} as const)


export const setUserProfile = (profile: ProfileType) => ({
    type: SET_USER_PROFILE,
    profile
} as const)

export const setStatus = (status: string) => ({
    type: SET_STATUS,
    status
} as const)

export const getUserProfile = (userId: number) => (dispatch: any) => {
    userAPI.getProfile(userId).then(res => {
        dispatch(setUserProfile(res.data))
    })
}

export const getStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId).then(res => {
        dispatch(setStatus(res.data))
    })
}

export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }

    })
}