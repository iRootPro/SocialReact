import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {AppStoreType} from "../../redux/redux-store";
import {withRouter} from "react-router"
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
type ProfilePropsType = {
    getUserProfile: (userId: number) => void
    isAuth: boolean
}

class ProfileContainer extends React.Component<any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = 9826
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
        status: state.profilePage.status
    }
}

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})(withUrlDataContainerComponent)