import {
    ActionType,
} from "../../redux/store";
import {addNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

let mapStateToProps = (state: AppStoreType) => {
    return {
        dialogsPage: state.dialogPage,
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(addNewMessageActionCreator(newMessageBody))
        }
    }
}



const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer

