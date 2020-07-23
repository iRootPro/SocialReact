import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    ActionType, addNewMessageActionCreator,
    DialogsDataType,
    updateNewMessageTextActionCreator,
} from "../../redux/state";

type PropsType = {
    state: DialogsDataType
    dispatch: (action: ActionType) => void
}



const Dialogs = (props: PropsType) => {
    let dialogElements = props.state.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let messageElements = props.state.messagesData.map(message => <Message key={message.id} message={message.message} id={message.id}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        props.dispatch(addNewMessageActionCreator())
    }

    const onChangeNewMessageHandler = () => {
        if (newMessageElement.current) {
            let textMessage = newMessageElement.current.value
            props.dispatch(updateNewMessageTextActionCreator(textMessage))
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>

            <div><textarea onChange={onChangeNewMessageHandler} ref={newMessageElement} value={props.state.newMessageText} /></div>
            <div><button onClick={addMessage}>Add message</button></div>
        </div>
    )
}


export default Dialogs