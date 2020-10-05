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
    },
    getProfile(userId: number) {
        console.warn('This method is old. Please use profileAPI')
        return profileAPI.getProfile(userId)
    }
}


export const profileAPI = {
    getProfile(userId: number) {
        return axiosWithSet.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return axiosWithSet.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
    return axiosWithSet.put(`profile/status`, {
        status: status
    })
}
}

export const authAPI = {
    me() {
       return  axiosWithSet.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return  axiosWithSet.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return  axiosWithSet.delete(`auth/login`)
    }
}