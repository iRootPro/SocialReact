import React from 'react'
import s from './../Dialogs.module.css'
import {PropsMessageType} from "../../../redux/store";


const Message = (props: PropsMessageType) => {

    return (
        <div>
            <div className={s.message}>{props.message}</div>

        </div>


    )
}


export default Message