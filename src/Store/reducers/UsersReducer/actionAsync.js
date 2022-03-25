import axios from 'axios';
import { userRequestAction, userRequestErrorAction, userRequestSuccessAction } from './userReducer';

const URL = process.env.REACT_APP_GITHUB_URL;
const AUTH_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const fetchUsers = (value) => {
    const params = new URLSearchParams({
        q: value
    });
    return (dispatch) => {
        dispatch(userRequestAction());
        axios.get(`${URL}/search/users?${params}`,{
            headers: { Authorization: `${AUTH_TOKEN}` }
        })
        .then((data) => dispatch(userRequestSuccessAction(data.data.items)))
        .catch((error) => dispatch(userRequestErrorAction(error)))
    }
}