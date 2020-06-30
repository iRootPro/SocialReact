import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export type PropsDialogType = {
    name: string
    id: number
}

export type PropsMessageType = {
    id: number
    message: string
}


const dialogsData: Array<PropsDialogType> = [
    {id: 1, name: 'Alex'},
    {id: 2, name: 'Sasha'},
    {id: 3, name: 'Petr'},
    {id: 4, name: 'Ivan'}
]

const messagesData: Array<PropsMessageType> = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'}
]


let dialogElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)


let messageElements = messagesData.map(message => <Message message={message.message} id={message.id}/>)

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}


export default Dialogs