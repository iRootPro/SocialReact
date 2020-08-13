import {
    ActionType,
} from "../../redux/store";
import {addNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {storeStateType} from "../../index";

let mapStateToProps = (state:storeStateType) => {
    return {
      dialogsPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch: (action: ActionType)=> void) => {
    return {
        updateNewMessageBody: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        sendMessage: () => {
            dispatch(addNewMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer

