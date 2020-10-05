import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {AppStoreType} from "../../redux/redux-store";
import {withRouter} from "react-router"
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
type ProfilePropsType = {
    getUserProfile: (userId: number) => void
    isAuth: boolean
}

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.autorizedUserId
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} setUserProfile={this.props.setUserProfile} status={this.props.status} updateStatus={this.props.updateStatus}/>

            </div>
        )
    }

}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state:AppStoreType) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})(withUrlDataContainerComponent)