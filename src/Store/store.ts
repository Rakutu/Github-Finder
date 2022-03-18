import { combineReducers } from 'redux';
import userRequestReducer from './reducers/userReducer';

const rootReducer = combineReducers({
    users: userRequestReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>

export default rootReducer;