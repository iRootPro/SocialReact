import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-redicer";
import {dialogsReducer} from "./dialogs-reducer";
import {StoreType} from "./store";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer
})

let store: StoreType = createStore(reducers)

export default store