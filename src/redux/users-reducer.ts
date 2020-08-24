const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'

const initState = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1
}

export type StateUserPageType = {
    users: Array<UserType>,
    pageSize: number,
    totalCount: number,
    currentPage: number
}

export type UserType = {
    id: number
    photos: photos
    followed: boolean
    name: string
    status: string
    location: LocationType
}

type photos = {
    small: null | string
    large: null | string
}

type LocationType = {
    city: string
    country: string
}

export type ActionUsersType = ReturnType<typeof followAC> |
    ReturnType<typeof unFollowAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalUserCountAC>

export const usersReducer = (state: StateUserPageType = initState, action: ActionUsersType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) return {...u, followed: false}
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) return {...u, followed: true}
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalCount: action.totalCount}
        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollowAC = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUserCountAC = (totalCount: number) => ({type: SET_TOTAL_USER_COUNT, totalCount} as const)
