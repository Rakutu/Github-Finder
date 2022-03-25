import { combineReducers } from 'redux';
import UserItemReducer from './reducers/UserItemReducer/userItemReducer';
import userRequestReducer from './reducers/UsersReducer/userReducer';

const rootReducer = combineReducers({
    users: userRequestReducer,
    userItem: UserItemReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>

export default rootReducer;