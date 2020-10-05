import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {followSuccess, getUsers, setCurrentPage, unFollowSuccess, UserType} from "../../redux/users-reducer";
import Users from "./Users";
import preloader from "./../../assets/img/preloader.svg"
import {
    getAllUsers,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCount
} from "../../redux/users-selectors";
import {AppStoreType} from "../../redux/redux-store";

type PropsType = {
    users: Array<UserType>,
    followSuccess: (id: number) => void,
    unFollowSuccess: (id: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <img src={preloader}/> : null}
            <Users
                totalCount={this.props.totalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.followSuccess}
                unfollow={this.props.unFollowSuccess}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

// const mapStateToProps = (state: StateType) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalCount: state.usersPage.totalCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }

const mapStateToProps = (state: AppStoreType) => {
    return {
        users: getAllUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default connect(mapStateToProps, {
    followSuccess,
    unFollowSuccess,
    setCurrentPage,
    getUsers
})(UsersContainer)
