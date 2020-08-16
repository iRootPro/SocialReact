import {PropsPostType} from "../components/Profile/MyPosts/Post/Post";
import {
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "./profile-redicer";
import {
    addNewMessageActionCreator,
    updateNewMessageTextActionCreator
} from "./dialogs-reducer";
import {StateUserPageType} from "./users-reducer";

export type ActionType =
    ReturnType<typeof updateNewMessageTextActionCreator> |
    ReturnType<typeof addNewMessageActionCreator> |
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator>

export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    _callSubscribe: (state?: StateType) => void,
    subscribe: (observe: any) => void,
    dispatch: (action: ActionType) => void
}

export type StateType = {
    profilePage: postsType
    dialogPage: DialogsDataType;
    usersPage: StateUserPageType
}

export type postsType = {
    posts: Array<PropsPostType>
    newPostText: string
}

export type DialogsDataType = {
    dialogsData: Array<PropsDialogType>
    messagesData: Array<PropsMessageType>,
    newMessageText: string
}

export type PropsDialogType = {
    id: number
    name: string
}

export type PropsMessageType = {
    id: number
    message: string
}
