import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionType, StateType} from "./redux/store";

type  PropsState = {
    state: StateType
    dispatch: (action: ActionType) => void
}


function App(props: PropsState) {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/profile'} render={() => <Profile
                        state={props.state.profilePage}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs
                               state={props.state.dialogPage}
                               dispatch={props.dispatch}
                           />}/>
                    <Route component={News} path={'/news'}/>
                    <Route component={Music} path={'/music'}/>
                    <Route component={Settings} exact path={'/settings'}/>
                </div>
            </div>
        </BrowserRouter>


    );
}
export default App;
