import {PropsPostType} from "../components/Profile/MyPosts/Post/Post";


const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', like: 15},
                {id: 2, message: 'My first post', like: 25}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Petr'},
                {id: 4, name: 'Ivan'}
            ],
            messagesData: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yo'}
            ],
            newMessageText: ''
        }
    },
    getState() {
        return this._state
    },
    _callSubscribe() {
        console.log('state changed')
    },
    subscribe(observe: (state: StateType | undefined) => void) {
        this._callSubscribe = observe
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                like: 0
            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscribe(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            if (action.newMessage) {
                this._state.dialogsPage.newMessageText = action.newMessage
                this._callSubscribe(this._state)
            }
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscribe(this._state)
        } else if (action.type === ADD_NEW_MESSAGE) {
            let newMessage = {
                id: 5,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messagesData.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._callSubscribe(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST} as const)


export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
} as const)


export const updateNewMessageTextActionCreator = (textMessage: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: textMessage
} as const)

export const addNewMessageActionCreator = () => ({
    type: ADD_NEW_MESSAGE
} as const)


export type ActionType =
    ReturnType<typeof addPostActionCreator> |
    ReturnType<typeof updateNewMessageTextActionCreator> |
    ReturnType<typeof updateNewPostTextActionCreator> |
    ReturnType<typeof addNewMessageActionCreator>

export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    _callSubscribe: (state?: StateType) => void,
    subscribe: (observe: any) => void,
    dispatch: (action: ActionType) => void
}

export type StateType = {
    profilePage: postsType
    dialogsPage: DialogsDataType
}

export type postsType = {
    posts: Array<PropsPostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogsData: DialogsDataType
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
