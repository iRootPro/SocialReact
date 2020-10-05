import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {AppStoreType} from "./redux/redux-store";
import Preloader from "./components/common/preloader/Preloader";

type PropsType = {
    initializeApp: () => void
    initialized: boolean
}

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={'app-wrapper-content'}>
                        <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                        <Route path={'/dialogs'}
                               render={() => <DialogsContainer/>}/>
                        <Route path={'/users'}
                               render={() => <UsersContainer/>}/>
                        <Route component={News} path={'/news'}/>
                        <Route component={Music} path={'/music'}/>
                        <Route component={Settings} exact path={'/settings'}/>
                        <Route component={Login} path={'/login'}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: AppStoreType) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeApp})(App))
