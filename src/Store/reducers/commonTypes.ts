
export const USER_REQUEST = 'USER_REQUEST';
export const USER_REQUEST_ERROR = 'USER_REQUEST_ERROR';

export interface UserRequestType {
    type: typeof USER_REQUEST
    payload: {
        loading: true;
    }
}


export interface UserRequestErrorType {
    type: typeof USER_REQUEST_ERROR;
    payload: {
        loading: false;
        error: Error;
    };
}