import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

const initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export type StateAuthType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type ActionAuthType = ReturnType<typeof setAuthUserData>

export const authReducer = (state: StateAuthType = initState, action: ActionAuthType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => ({type: SET_USER_DATA, data: {userId, email, login}})
export const getAuthUserData = () => (dispatch:any) => {
    authAPI.me().then(res => {
        if (res.data.resultCode === 0) {
            let {id, email, login} = res.data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}
