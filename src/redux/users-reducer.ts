import {act} from "react-dom/test-utils";

const FOLLOW = "FOLLOW";
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

const initState = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

export type StateUserPageType = {
    users: Array<UserType>,
    pageSize: number,
    totalCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
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

export type ActionUsersType = ReturnType<typeof follow> |
    ReturnType<typeof unFollow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUserCount> |
    ReturnType<typeof setIsFetching> |
    ReturnType<typeof toggleFollowingProgress>

export const usersReducer = (state: StateUserPageType = initState, action: ActionUsersType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) return {...u, followed: true}
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) return {...u, followed: false}
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followInProgress ?
                    [...state.followingInProgress, action.userId] :
                    [...state.followingInProgress.filter(id => id !== action.userId)]}
        default:
            return state
    }
}

export const follow = (userID: number) => ({type: FOLLOW, userID} as const)
export const unFollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUserCount = (totalCount: number) => ({type: SET_TOTAL_USER_COUNT, totalCount} as const)
export const setIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)
export const toggleFollowingProgress = (followInProgress: boolean, userId: number) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followInProgress, userId} as const)
