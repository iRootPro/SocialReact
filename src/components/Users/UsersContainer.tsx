import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import Users from "./Users";
import {
    ActionUsersType,
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";


const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionUsersType) => void) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUserCount: (totalCount: number) => {
            dispatch(setTotalUserCountAC(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer