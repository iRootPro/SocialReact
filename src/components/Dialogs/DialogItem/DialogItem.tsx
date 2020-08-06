import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import {PropsDialogType} from "../../../redux/store";



export const DialogItem = (props: PropsDialogType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem