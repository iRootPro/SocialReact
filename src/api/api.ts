import axios from "axios";

const axiosWithSet =  axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '65f9b7df-3cf1-4842-b8af-efdce89e120e'
    }
})

export const userAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return axiosWithSet.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    unFollow(id: number) {
        return axiosWithSet.delete(`follow/${id}`).then(res => res.data)
    },
    follow(id: number) {
        return axiosWithSet.post(`follow/${id}`).then(res => res.data)
    }
}