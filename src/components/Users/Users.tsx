import React from "react";
import {UserType} from "../../redux/users-reducer";
import axios from 'axios'
import avatar from '../../assets/img/avatar.png'

type PropsType = {
    users: Array<UserType>,
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    setUsers: (users: Array<UserType>) => void
}

class Users extends React.Component<PropsType> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(res => this.props.setUsers(res.data.items))
    }

    render() {
        return (
            <div>
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