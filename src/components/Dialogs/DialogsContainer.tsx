import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionType,
    DialogsDataType,
} from "../../redux/store";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

type PropsType = {
    state: DialogsDataType
    dispatch: (action: ActionType) => void
}

const DialogsContainer = (props: any) => {
    let state = props.store.getState().dialogPage
    const addMessage = () => {
        props.store.dispatch(addNewMessageActionCreator())
    }

    const onChangeNewMessageHandler = (text: string) => {
            props.store.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
       <Dialogs
           updateNewMessageBody={onChangeNewMessageHandler}
           sendMessage={addMessage}
           dialogsPage={state}
       />
    )
}


export default DialogsContainer