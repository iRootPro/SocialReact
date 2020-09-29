import {ActionType, DialogsDataType} from "./store";
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
}

export const dialogsReducer = (state: DialogsDataType = initState, action: ActionType) => {

    switch (action.type) {
        case ADD_NEW_MESSAGE:
            let newMessage = {
                id: 5,
                message: action.newMessageBody
            }
            const stateCopy = {...state}
            stateCopy.messagesData = [...state.messagesData]
            stateCopy.messagesData.push(newMessage)
            return stateCopy
        default:
            return state
    }
}

export const addNewMessageActionCreator = (newMessageBody: string) => ({
    type: ADD_NEW_MESSAGE, newMessageBody
} as const)