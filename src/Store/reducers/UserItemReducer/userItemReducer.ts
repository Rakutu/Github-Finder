import { ActionUserItemType, UserItemClear, UserItemRequest, UserItemRequestError, UserItemRequestRepos, UserItemRequestSuccessType, UserItemStateType, USER_ITEM_CLEAR, USER_ITEM_REQUEST, USER_ITEM_REQUEST_ERROR, USER_ITEM_REQUEST_REPOS, USER_ITEM_REQUEST_SUCCESS } from './userItemReducerTypes'
import { ActionCreator, Reducer } from 'redux';

const initialState: UserItemStateType = {
    loading: false,
    error: null,
    userItem: null,
    userRepos: null,
}

const UserItemReducer: Reducer<UserItemStateType, ActionUserItemType> = (state = initialState, action: ActionUserItemType): UserItemStateType => {
    switch (action.type) {
        case USER_ITEM_REQUEST: 
            return {...state, loading: true};
        case USER_ITEM_REQUEST_SUCCESS:
            return {...state, loading: false, userItem: action.payload.userItem};
        case USER_ITEM_REQUEST_ERROR:
            return {...state, loading: false, error: action.payload.error};
        case USER_ITEM_REQUEST_REPOS:
            return {...state, userRepos: action.payload.userRepos}
        case USER_ITEM_CLEAR: 
            return {...state, loading: false, error: null, userItem: null, userRepos: null}
        default: return state;
    }
}

export const userItemSuccessAction: ActionCreator<UserItemRequestSuccessType> = (userItem) =>({
    type: USER_ITEM_REQUEST_SUCCESS,
    payload: {
        loading: false,
        userItem
    }
})

export const userItemClearAction: ActionCreator<UserItemClear> = () => ({
    type: USER_ITEM_CLEAR,
})

export const userItemRequestAction: ActionCreator<UserItemRequest> = () => ({
    type: USER_ITEM_REQUEST,
    payload: {
        loading: true,
    }
})

export const userItemRequestErrorAction: ActionCreator<UserItemRequestError> = (error: Error) => ({
    type: USER_ITEM_REQUEST_ERROR,
    payload: {
        error,
    }
})

export const userItemRequestReposAction: ActionCreator<UserItemRequestRepos> = (userRepos: any) => ({
    type: USER_ITEM_REQUEST_REPOS,
    payload: {
        userRepos,
    }
})

export default UserItemReducer