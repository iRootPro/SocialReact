import React from "react";
import Header from "./Header";

import {connect} from "react-redux";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import {AppStoreType} from "../../redux/redux-store";


export type PropsTypeHeaderComponent = {
    getAuthUserData: () => void
    login: null | string
    isAuth: boolean
}

class HeaderContainer extends React.Component<PropsTypeHeaderComponent> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }

}
let mapStateToProps = (state: AppStoreType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)