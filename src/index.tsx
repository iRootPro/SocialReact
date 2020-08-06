import React from 'react';
import * as serviceWorker from './serviceWorker';
import {DialogsDataType, postsType, StateType, StoreType} from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import store from './redux/redux-store'

type storeStateType = {
    profilePage: postsType,
    dialogPage: DialogsDataType
}

const rerender = (state: storeStateType) => {
    console.log(store)
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch = {store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender(store.getState())
store.subscribe(() => {
    let state = store.getState()
    rerender(state)
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
