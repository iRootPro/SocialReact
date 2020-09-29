import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataType} from "../../redux/store";
import {Redirect} from 'react-router-dom';
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validators/validator";

type PropsType = {
    dialogsPage: DialogsDataType
    sendMessage: (newMessage: string) => void
    isAuth: boolean
}

const Dialogs = (props: PropsType) => {
    let dialogElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                                 id={dialog.id}/>)
    let messageElements = props.dialogsPage.messagesData.map(message => <Message key={message.id}
                                                                                 message={message.message}
                                                                                 id={message.id}/>)

    const addNewMessage = (values: AddMessageType) => {
        props.sendMessage(values.newMessageBody)
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
           <AddMessageFormRedux onSubmit={addNewMessage}/>

        </div>
    )
}

const maxLength100 = maxLengthCreator(100)
const AddMessageForm = (props: any) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required,maxLength100]} name={"newMessageBody"} placeholder={"Enter new message"}/>
            </div>

            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageType>({form: 'AddMessageForm'})(AddMessageForm)


export default Dialogs

// types

type AddMessageType = {
    newMessageBody: string
}