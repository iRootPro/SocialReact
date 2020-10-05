import React from "react";
import Header from "./Header";

import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {AppStoreType} from "../../redux/redux-store";


export type PropsTypeHeaderComponent = {
    login: null | string
    isAuth: boolean
    logout: () => void
}

class HeaderContainer extends React.Component<PropsTypeHeaderComponent> {


    render() {
        return <Header {...this.props}/>
    }

}
let mapStateToProps = (state: AppStoreType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {logout})(HeaderContainer)