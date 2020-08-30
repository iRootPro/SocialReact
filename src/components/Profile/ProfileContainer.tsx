import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStoreType} from "../../redux/redux-store";

type ProfilePropsType = {
    setUserProfile: (profile: ProfilePropsType) => void
}

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(res => {
            this.props.setUserProfile(res.data)
        })
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} setUserProfile={this.props.setUserProfile}/>

            </div>
        )
    }

}

let mapStateToProps = (state:AppStoreType) => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)