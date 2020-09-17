import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
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
        if (!userId) userId = 2
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile} setUserProfile={this.props.setUserProfile}/>

            </div>
        )
    }

}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state:AppStoreType) => {
    return {
        profile: state.profilePage.profile,
    }
}

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent)