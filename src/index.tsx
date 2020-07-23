import React from 'react';
import * as serviceWorker from './serviceWorker';
import {StateType, StoreType} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import {store} from './redux/state'

const rerender = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} dispatch = {store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender(store.getState())
store.subscribe(rerender)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
