import { UsersType } from '../types/types';
import { AppStateType } from './reduxStore';

export const getUsers = (state: AppStateType):Array<UsersType> => {
    return state.usersPage.users
}

export const getPageSize = (state: AppStateType): number => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: AppStateType) : number=> {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: AppStateType): number => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: AppStateType): boolean => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: AppStateType): Array<number> => {
    return state.usersPage.followingInProgress
}