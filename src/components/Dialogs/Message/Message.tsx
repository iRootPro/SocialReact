import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import {PropsMessageType} from "../Dialogs";

const Message = (props: PropsMessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}


export default Message