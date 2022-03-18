import axios from 'axios';
import { userRequestAction, userRequestErrprAction, userRequestSuccessAction } from './userReducer';

const URL = process.env.REACT_APP_GITHUB_URL;
const AUTH_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(userRequestAction());
        axios.get(`${URL}/users`,{
            headers: { Authorization: `${AUTH_TOKEN}` }
        })
        .then((data) => dispatch(userRequestSuccessAction(data.data)))
        .catch((error) => dispatch(userRequestErrprAction(error)))
        // .then((data) => data.json())
    }
}