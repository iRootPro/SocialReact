import {ActionType, DialogsDataType} from "./store";
import {act} from "react-dom/test-utils";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";

let initState = {
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

export const dialogsReducer = (state: DialogsDataType = initState, action: ActionType) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            if (action.newMessage) {
                state.newMessageText = action.newMessage
            }
            return state
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage)
            state.newMessageText = ''
            return state
        default:
            return state
    }
}

export const updateNewMessageTextActionCreator = (textMessage: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: textMessage
} as const)

export const addNewMessageActionCreator = () => ({
    type: ADD_NEW_MESSAGE
} as const)