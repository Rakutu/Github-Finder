import axios from 'axios'
import { Dispatch } from 'redux'
import { userItemRequestAction, userItemRequestErrorAction, userItemRequestReposAction, userItemSuccessAction } from './userItemReducer';
import { ActionUserItemType } from './userItemReducerTypes'

const URL = process.env.REACT_APP_GITHUB_URL;
const AUTH_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
    baseURL: URL,
    headers: { Authorization: `${AUTH_TOKEN}` }
})

const fetchUserItem = (userLogin: string) => {

    return async (dispatch: Dispatch<ActionUserItemType>) => {
        const params = new URLSearchParams({
            sort: 'created',
            per_page: '10'
        })

        try {
            dispatch(userItemRequestAction())
            const [userItem, userRepos] = await Promise.all([
                github.get(`/users/${userLogin}`),
                github.get(`/users/${userLogin}/repos?${params}`)
            ])

            if (userItem.status === 404) {
                window.location.pathname = '/notFound';
            }
            dispatch(userItemSuccessAction(userItem.data)) 
            dispatch(userItemRequestReposAction(userRepos.data))

        } catch (error) {
            dispatch(userItemRequestErrorAction(error))
        }



        // dispatch(userItemRequestAction())
        // axios.get(`${URL}/users/${userLogin}`,{
        //     headers: { Authorization: `${AUTH_TOKEN}` }
        // })
        // .then((data) => {
        //     if (data.status === 404) {
        //         window.location.pathname = '/notFound';
        //     }
        //     dispatch(userItemSuccessAction(data.data))
        // })
        // .catch((error) => dispatch(userItemRequestErrorAction(error)))

        // axios.get(`${URL}/users/${userLogin}/repos`)
    }
}

export default fetchUserItem