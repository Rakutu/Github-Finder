import { FaEye, FaInfo, FaLink, FaStar } from 'react-icons/fa';
import { GoRepoForked } from 'react-icons/go';
import { UserItemRepoType } from '../../../Store/reducers/UserItemReducer/userItemReducerTypes';

interface RepoItemPropTypes {
    repo: UserItemRepoType;
}

function RepoItem({ repo }: RepoItemPropTypes) {
    return (
        <div className='mb-2 rounded-md card bg-gray-800 hover:bg-gray-900'>
            <div className="card-body">
                <h4 className="mb-2 text-xl font-semibold">
                    <a href={repo.html_url}>
                        <FaLink className='inline mr-1' />
                        {repo.name}
                    </a>
                </h4>
                <p className="mb-3">{repo.description}</p>
                <div>
                    <div className="mr-2 badge badge-info badge-lg">
                        <FaEye className='mr-2' />
                        {repo.watchers_count}
                    </div>
                    
                    <div className="mr-2 badge badge-success badge-lg">
                        <FaStar className='mr-2' />
                        {repo.stargazers_count}
                    </div>
                    
                    <div className="mr-2 badge badge-error badge-lg">
                        <FaInfo className='mr-2' />
                        {repo.open_issues}
                    </div>
                    
                    <div className="mr-2 badge badge-warning badge-lg">
                        <GoRepoForked className='mr-2' />
                        {repo.forks}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RepoItem