import {PropsPostType} from "../components/Profile/MyPosts/Post/Post";
import {
    addPostActionCreator, setStatus, setUserProfile
} from "./profile-reducer";
import {
    addNewMessageActionCreator,
} from "./dialogs-reducer";
import {StateUserPageType} from "./users-reducer";
import {ProfileType} from "../components/Profile/Profile";

export type ActionType =
    ReturnType<typeof addNewMessageActionCreator> |
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus>

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
    profile: null | ProfileType,
    status: string
}

export type DialogsDataType = {
    dialogsData: Array<PropsDialogType>
    messagesData: Array<PropsMessageType>,
}

export type PropsDialogType = {
    id: number
    name: string
}

export type PropsMessageType = {
    id: number
    message: string
}
