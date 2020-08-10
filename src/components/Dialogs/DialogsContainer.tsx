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
import {StoreContext} from "../../StoreContext";

type PropsType = {
    state: DialogsDataType
    dispatch: (action: ActionType) => void
}

const DialogsContainer = (props: any) => {


    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogPage
                const addMessage = () => {
                    store.dispatch(addNewMessageActionCreator())
                }

                const onChangeNewMessageHandler = (text: string) => {
                    store.dispatch(updateNewMessageTextActionCreator(text))
                }
                return (
                    <Dialogs
                        updateNewMessageBody={onChangeNewMessageHandler}
                        sendMessage={addMessage}
                        dialogsPage={state}
                    />
                )
            }
        }

        </StoreContext.Consumer>
    )
}


export default DialogsContainer