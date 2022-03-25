import { ChangeEvent, FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../../Store/reducers/UsersReducer/actionAsync';
import { userClearAction } from '../../Store/reducers/UsersReducer/userReducer';
import AlertMessage from '../shared/AlertMessage';


function UserSearch({ usersCount }: { usersCount: number}) {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    const clearHandleChange = () => {
        dispatch(userClearAction())
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (value.length < 1) {
            setError('Please enter something')
        } else {
            dispatch(fetchUsers(value))
            setValue('')
            setError('')
        }
    }

    return (
        <>
            {error && <AlertMessage message={error} />}
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 mb-8 gap-8'>
                <form onSubmit={handleSubmit}>
                    <div className="form-control relative">
                        <input 
                            type="text" 
                            className="w-full pr-40 bg-gray-200 input input-lg text-black"  
                            placeholder='Search' 
                            inputMode='text'
                            value={value}
                            onChange={handleChange}/>
                        <button className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg" type='submit'>Go</button>
                    </div>
                </form>
                { usersCount > 0 && 
                    (<div>
                        <button onClick={clearHandleChange} className="btn btn-ghost btn-lg border-2 border-neutral">Clear</button>
                    </div>)
                }
            </div>
        </>
    )
}

export default UserSearch