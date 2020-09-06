import axios from "axios";


export const userAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        }).then(res => res.data)
    },
    unFollow(id: number) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {
                withCredentials: true,
                headers: {
                    'API-KEY': '65f9b7df-3cf1-4842-b8af-efdce89e120e'
                }
            }).then(res => res.data)
    },
    follow(id: number) {
        return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`,
            {},
            {
                withCredentials: true,
                headers: {
                    'API-KEY': '65f9b7df-3cf1-4842-b8af-efdce89e120e'
                }
            }).then(res => res.data)
    }
}