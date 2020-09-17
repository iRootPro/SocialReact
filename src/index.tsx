import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import App from "./App";
import store from './redux/redux-store'
import {Provider} from "react-redux";
import {DialogsDataType, postsType} from "./redux/store";

export type storeStateType = {
    profilePage: postsType,
    dialogPage: DialogsDataType,
    isAuth: boolean
}

    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );

serviceWorker.unregister();
