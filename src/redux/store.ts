import {PropsPostType} from "../components/Profile/MyPosts/Post/Post";
import {
    addPostActionCreator,
    profileReducer,
    updateNewPostTextActionCreator
} from "./profile-redicer";
import {
    addNewMessageActionCreator,
    dialogsReducer,
    updateNewMessageTextActionCreator
} from "./dialogs-reducer";

export type ActionType =
    ReturnType<typeof updateNewMessageTextActionCreator> |
    ReturnType<typeof addNewMessageActionCreator> |
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator>

// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'Hi, how are you?', like: 15},
//                 {id: 2, message: 'My first post', like: 25}
//             ],
//             newPostText: ''
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {id: 1, name: 'Alex'},
//                 {id: 2, name: 'Sasha'},
//                 {id: 3, name: 'Petr'},
//                 {id: 4, name: 'Ivan'}
//             ],
//             messagesData: [
//                 {id: 1, message: 'Hello'},
//                 {id: 2, message: 'How are you?'},
//                 {id: 3, message: 'Yo'}
//             ],
//             newMessageText: ''
//         }
//     },
//     getState() {
//         return this._state
//     },
//     _callSubscribe() {
//         console.log('state changed')
//     },
//     subscribe(observe: (state: StateType | undefined) => void) {
//         this._callSubscribe = observe
//     },
//     dispatch(action:ActionType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._callSubscribe(this._state)
//     }
// }

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
