import { UserType } from '../../Store/reducers/UsersReducer/reducerTypes';
import { Link } from 'react-router-dom';

import styles from './userItem.module.css';

interface UserItemPropTypes {
    user: UserType
}

function UserItem({ user: { avatar_url, login} }: UserItemPropTypes) {
  return (
    <Link to={`/Github-Finder/users/${login}`}>
        <div className={`card shadow-md compact side bg-base-100 ${styles.user__item}`} >
            <div className="flex-row items-center space-x-4 card-body">
                <div className="avatar">
                    <div className="w-14 h-14">
                        <img className='rounded-full shadow' src={avatar_url} alt={`${login} profile`} />
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{login}</h2>
                    <span className='text-base-content text-opacity-40'>View Profile</span>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default UserItem