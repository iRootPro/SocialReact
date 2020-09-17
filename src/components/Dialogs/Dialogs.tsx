import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataType} from "../../redux/store";
import {Redirect} from 'react-router-dom';

type PropsType = {
    dialogsPage: DialogsDataType
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
    isAuth: boolean
}

const Dialogs = (props: PropsType) => {
    let dialogElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                                 id={dialog.id}/>)
    let messageElements = props.dialogsPage.messagesData.map(message => <Message key={message.id}
                                                                                 message={message.message}
                                                                                 id={message.id}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        props.sendMessage()
    }

    const onChangeNewMessageHandler = () => {
        if (newMessageElement.current) {
            let textMessage = newMessageElement.current.value
            props.updateNewMessageBody(textMessage)
        }
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>

            <div><textarea onChange={onChangeNewMessageHandler} ref={newMessageElement}
                           value={props.dialogsPage.newMessageText}/></div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}


export default Dialogs