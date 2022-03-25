import { UserRequestErrorType, UserRequestType } from '../commonTypes';

export const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS';
export const USER_CLEAR = 'USER_CLEAR';


export interface UserRequestSuccessType {
    type: typeof USER_REQUEST_SUCCESS;
    payload: {
        loading: false;
        users: UserType[];
    };
}

export interface UserClearType {
    type: typeof USER_CLEAR;
}

export interface UserType {
    login: string,
    avatar_url: string,
}

export interface StateType {
    users: UserType[] | null,
    loading: boolean,
    error: Error | null,
}


export type actionType = UserRequestType | UserRequestSuccessType | UserRequestErrorType | UserClearType;







