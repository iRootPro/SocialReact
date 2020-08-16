import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import Users from "./Users";
import {ActionUsersType, followAC, setUsersAC, unFollowAC, UserType} from "../../redux/users-reducer";


const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users
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
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer