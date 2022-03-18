
export const USER_REQUEST = 'USER_REQUEST';
export const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS';
export const USER_REQUEST_ERROR = 'USER_REQUEST_ERROR';

export interface UserRequestType {
    type: typeof USER_REQUEST
    payload: {
        loading: true;
    }
}


export interface UserRequestSuccessType {
    type: typeof USER_REQUEST_SUCCESS;
    payload: {
        loading: false;
        users: UserType[];
    };
}


export interface UserRequestErrorType {
    type: typeof USER_REQUEST_ERROR;
    payload: {
        loading: false;
        error: Error;
    };
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

export type actionType = UserRequestType | UserRequestSuccessType | UserRequestErrorType;







