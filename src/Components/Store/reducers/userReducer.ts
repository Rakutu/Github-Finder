
const USER_REQUEST = 'USER_REQUEST';

export interface UserRequestType {
    type: typeof USER_REQUEST
}

const USER_REQUEST_SUCCESS = 'USER_REQUEST_SUCCESS';

export interface UserRequestSuccessType {
    type: typeof USER_REQUEST_SUCCESS,
    payload: {

    }
}

export interface UserType {
    login: string,
    avatar: string,
}

export interface StateType {
    users: UserType[] | null,
    loading: boolean,
    error: Error,
}

