import * as userTypes from './reducerTypes';
import { ActionCreator, Reducer } from 'redux'
import { UserRequestErrorType, UserRequestType, USER_REQUEST, USER_REQUEST_ERROR } from '../commonTypes';

export const initialState: userTypes.StateType = {
    loading: false,
    users: null,
    error: null
}

const userRequestReducer: Reducer<userTypes.StateType, userTypes.actionType> = (state = initialState, action: userTypes.actionType): userTypes.StateType => {
    switch (action.type) {
        case USER_REQUEST:
            return {...state, loading: true};
        case userTypes.USER_REQUEST_SUCCESS:
            return {...state, users: action.payload.users, loading: action.payload.loading};
        case USER_REQUEST_ERROR:
            return {...state, error: action.payload.error, loading: action.payload.loading}
        case userTypes.USER_CLEAR:
            return { error: null, loading: false, users: null}
        default: return state
    }
}

export const userRequestAction: ActionCreator<UserRequestType> = () => ({
    type: USER_REQUEST,
    payload: {
        loading: true,
    }
})

export const userRequestSuccessAction: ActionCreator<userTypes.UserRequestSuccessType> = (users: userTypes.UserType[]) => ({
    type: userTypes.USER_REQUEST_SUCCESS,
    payload: {
        loading: false,
        users, 
    }
})

export const userRequestErrorAction: ActionCreator<UserRequestErrorType> = (error: Error) => ({
    type: USER_REQUEST_ERROR,
    payload: {
        loading: false,
        error,
    }
})

export const userClearAction: ActionCreator<userTypes.UserClearType> = () => ({
    type: userTypes.USER_CLEAR,
})

export default userRequestReducer;