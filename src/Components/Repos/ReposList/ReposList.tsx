import { useSelector } from 'react-redux'
import { UserItemRepoType } from '../../../Store/reducers/UserItemReducer/userItemReducerTypes'
import { rootReducerType } from '../../../Store/store'
import RepoItem from '../RepoItem'



function ReposList() {

    const userRepos = useSelector<rootReducerType, UserItemRepoType[]>((state) => state.userItem.userRepos)

    return (
        <div className='rounded-lg shadow-lg card bg-base-100'>
            <div className="card-body">
                <h3 className="text-3xl my-4 font-bold card-title">
                    Latest Repositories
                </h3>
                {userRepos && userRepos.map((repo) => {
                    return <RepoItem key={repo.id} repo={repo} />
                })}
            </div>
        </div>
    )
}

export default ReposList