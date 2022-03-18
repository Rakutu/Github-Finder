
import { useSelector } from 'react-redux';
import { Spiner } from '../shared/Spiner';
import { StateType } from '../../Store/reducers/reducerTypes';
import { rootReducerType } from '../../Store/store';
import { UserItem } from '../UserItem';

function Home() {

    const { users, loading, error} = useSelector<rootReducerType, StateType>(state => state.users)

    if (error) {
        return <h1>{error.message}</h1>
    }

    return loading
        ? <Spiner />
        : (<ul className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mb-12'>
                { 
                    users?.map(user => (
                        <li key={user.login}>
                            <UserItem user={user} />
                        </li>
                    ))
                    
                }
            </ul>
    )
}

export default Home