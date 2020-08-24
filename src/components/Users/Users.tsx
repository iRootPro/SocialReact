import React from "react";
import {UserType} from "../../redux/users-reducer";
import axios from 'axios'
import avatar from '../../assets/img/avatar.png'
import classes from './users.module.css'
import {log} from "util";

type PropsType = {
    users: Array<UserType>,
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUserCount: (totalCount: number) => void,
    pageSize: number,
    totalCount: number,
    currentPage: number
}

class Users extends React.Component<PropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalUserCount(res.data.totalCount)
            console.log(res.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => this.props.setUsers(res.data.items))
    }

    render() {
        const pagesSize = Math.ceil(this.props.totalCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesSize; i++) pages.push(i)
        return (
            <div>
                <div>
                    { pages.map(p => <span key={p} className={this.props.currentPage === p? classes.selectedPage: ''} onClick={() => this.onPageChanged(p)} >{p}</span>)}
                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img style={{width: '100px', height: '100px'}}
                                 src={u.photos.small !== null ? u.photos.small : avatar}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => this.props.follow(u.id)}>Follow</button> :
                                <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                    </div>)
                }

            </div>
        )
    }
}


export default Users