import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {
    follow,
    setCurrentPage,
    setIsFetching, setTotalUserCount,
    setUsers,
    unFollow,
    UserType
} from "../../redux/users-reducer";
import axios from "axios";
import Users from "./Users";
import preloader from "./../../assets/img/preloader.svg"

type PropsType = {
    users: Array<UserType>,
    follow: (id: number) => void,
    unFollow: (id: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUserCount: (totalCount: number) => void,
    setIsFetching: (isFetching: boolean) => void,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean
}

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(res => {
            this.props.setIsFetching(false)
            this.props.setUsers(res.data.items)
            this.props.setTotalUserCount(res.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(res => {
            this.props.setIsFetching(false)
            this.props.setUsers(res.data.items)

        })
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
                follow={this.props.follow}
                unfollow={this.props.unFollow}
            />
        </>
    }
}

const mapStateToProps = (state: StateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUserCount,
    setIsFetching
})(UsersContainer)
