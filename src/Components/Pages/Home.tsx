
import { useSelector } from 'react-redux';
import { Spiner } from '../shared/Spiner';
import { StateType } from '../Store/reducers/reducerTypes';
import { rootReducerType } from '../Store/store';

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN || 'token';

function Home() {
    // const [users, setUsers] = useState<UserType[]>([])
    // useEffect(() => {
    //     axios.get(`${URL}/users`)
    //         .then((data: any) => {
    //             setUsers(data.data)
    //         })
    // }, [])

    const { users, loading, error} = useSelector<rootReducerType, StateType>(state => state.users)

    if (error) {
        return <h1>{error.message}</h1>
    }

    return loading
        ? <Spiner />
        : (<ul className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 '>
                { 
                    users?.map(user => (
                        <li key={user.login}>
                            <span>{user.login}</span>
                            <img src={user.avatar_url} alt={user.login} style={{width: '100px', height: '100px', borderRadius: '50%'}} />
                        </li>
                    ))
                    
                }
            </ul>
    )
}

export default Home