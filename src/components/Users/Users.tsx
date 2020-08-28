import React from "react";
import classes from "./users.module.css";
import avatar from "../../assets/img/avatar.png";
import {UserType} from "../../redux/users-reducer";


type PropsType = {
    users: Array<UserType>,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    onPageChanged: (page: number) => void,
    follow: (id: number) => void,
    unfollow: (id: number) => void
}


const Users = (props: PropsType) => {
    const pagesSize = Math.ceil(props.totalCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesSize; i++) pages.push(i)
    return (
        <div>
            <div>
                { pages.map(p => <span key={p} className={props.currentPage === p? classes.selectedPage: ''} onClick={() => props.onPageChanged(p)} >{p}</span>)}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img style={{width: '100px', height: '100px'}}
                                 src={u.photos.small !== null ? u.photos.small : avatar}/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => props.follow(u.id)}>Follow</button> :
                                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>}
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

export default Users