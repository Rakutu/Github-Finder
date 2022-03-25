
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import fetchUserItem from '../../../Store/reducers/UserItemReducer/userItemAsyncAction';
import { UserItem, UserItemStateType } from '../../../Store/reducers/UserItemReducer/userItemReducerTypes';
import { rootReducerType } from '../../../Store/store';
import { Spiner } from '../../shared/Spiner';
import UserPage from './UserPage';

function UserPageContainer() {
    const { login } = useParams();
    const disptach = useDispatch();
    
    useEffect(() => {
        if (typeof login === 'string') {
            disptach(fetchUserItem(login))
        } 
    }, [])

    const { userItem, loading, error } = useSelector<rootReducerType, UserItemStateType>(state => state.userItem)


    if (loading) return <Spiner />

    if (error) return <h1>{error}</h1>

    if (isUserItem(userItem)) {
        return <UserPage userItem={userItem}/>
    } else {
        return null
    }

    
}

const isUserItem = (user: UserItem | null): user is UserItem => user !== null;

export default UserPageContainer