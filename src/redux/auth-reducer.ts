import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
                ...action.data
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number| null, email: string | null, login: string | null, isAuth: boolean) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}})
export const getAuthUserData = () => (dispatch:any) => {
    return authAPI.me().then(res => {
        if (res.data.resultCode === 0) {
            let {id, email, login} = res.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch:any) => {
    authAPI.login(email, password, rememberMe).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = res.data.messages.length > 0 ? res.data.messages[0] : 'Some Error'
            dispatch(stopSubmit('login', {_error: message}))
        }
    })
}

export const logout = () => (dispatch:any) => {
    authAPI.logout().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}
