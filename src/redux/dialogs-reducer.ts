import {ActionType, DialogsDataType} from "./state";
import {act} from "react-dom/test-utils";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_NEW_MESSAGE = "ADD-NEW-MESSAGE";


export const dialogsReducer = (state: DialogsDataType, action: ActionType) => {

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