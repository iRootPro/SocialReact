import React from 'react';
import * as serviceWorker from './serviceWorker';
import {DialogsDataType, postsType} from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import store from './redux/redux-store'
import {Provider} from "react-redux";


export type storeStateType = {
    profilePage: postsType,
    dialogPage: DialogsDataType
}

const rerender = (state: storeStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
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
