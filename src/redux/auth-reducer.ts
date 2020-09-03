const SET_USER_DATA = "SET_USER_DATA";

const initState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: false
}

export type StateAuthType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    // isFetching: boolean
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
// export const setIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
