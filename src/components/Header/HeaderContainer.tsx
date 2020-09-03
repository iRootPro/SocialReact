import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStoreType} from "../../redux/redux-store";


export type PropsTypeHeaderComponent = {
    setAuthUserData: (userId: number, email: string, login: string) => void
    isAuth: boolean,
    login: null | string
}

class HeaderContainer extends React.Component<PropsTypeHeaderComponent> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(res => {
            if (res.data.resultCode === 0) {
                let {id, email, login} = res.data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }

}
let mapStateToProps = (state: AppStoreType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)