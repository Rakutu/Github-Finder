import axios from 'axios';
import { userRequestAction, userRequestErrorAction, userRequestSuccessAction } from './userReducer';

// const URL = process.env.REACT_APP_GITHUB_URL;
// const AUTH_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const fetchUsers = (value) => {
    const params = new URLSearchParams({
        q: value
    });
    return (dispatch) => {
        dispatch(userRequestAction());
        axios.get(`https://api.github.com/search/users?${params}`,{
            headers: { Authorization: `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` }
        })
        .then((data) => dispatch(userRequestSuccessAction(data.data.items)))
        .catch((error) => dispatch(userRequestErrorAction(error)))
    }
}