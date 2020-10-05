import {AppStoreType} from "./redux-store";

export const getAllUsers = (state: AppStoreType) => {
    return state.usersPage.users
}

export const getPageSize = (state: AppStoreType) => {
    return state.usersPage.pageSize
}

export const getTotalCount = (state: AppStoreType) => {
    return state.usersPage.totalCount
}

export const getCurrentPage = (state: AppStoreType) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStoreType) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStoreType) => {
    return state.usersPage.followingInProgress
}