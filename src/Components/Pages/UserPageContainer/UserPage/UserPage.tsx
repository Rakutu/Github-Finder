
import { UserItem } from '../../../../Store/reducers/UserItemReducer/userItemReducerTypes'
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReposList from '../../../Repos/ReposList/ReposList';

interface UserPagePropTypes {
    userItem: UserItem
}

function UserPage({ userItem }: UserPagePropTypes) {
    return (
        <>
            <div className="w-full mx-auto lg:w-10/12">
                <div className="mb-4">
                    <Link to='/Github-Finder/' className='btn btn-ghost'>Back to search</Link>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
                    <div className="custom-card-image mb-6 md:mb-0">
                        <div className="rounded-lg shadow-xl card image-full">
                            <figure>
                                <img src={userItem.avatar_url} alt={userItem.login} />
                            </figure>
                            <div className="card-body mt-auto">
                                <h2 className="card-title mb-0">{userItem.name}</h2>
                                <p>{userItem.login}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-2">
                        <div className="mb-6">
                            <h1 className="text-3xl card-title">
                                {userItem.name}
                                <div className="ml-2 mr-1 badge badge-success">
                                    {userItem.type}
                                </div>
                                {userItem.hireable && (
                                    <div className="mx-1 badge badge-info">
                                        Hireable
                                    </div>
                                )}
                            </h1>
                            <p>{userItem.bio}</p>
                            <div className="mt-4 card-actions">
                                <a href={userItem.html_url} target="_blank" rel="noreferrer" className='btn btn-outline'>Visit Github Profile</a>
                            </div>
                        </div>

                        <div className="w-full rounded-lg shadow-md-bg-base-100 stats">
                            {userItem.location && (
                                <div className="stat">
                                    <div className="stat-title text-md">Location</div>
                                    <p className="text-lg stat-value">{userItem.location}</p>
                                </div>
                            )}
                            {(userItem.blog !== 'none') && (
                                <div className="stat">
                                    <div className="stat-title text-md">Website</div>
                                    <p className="text-lg stat-value">
                                        <a href={`https://${userItem.blog}`} target="_blank" rel='noreferrer'>{userItem.blog}</a>
                                    </p>
                                </div>
                            )}
                            {userItem.twitter_username && (
                                <div className="stat">
                                    <div className="stat-title text-md">Twitter</div>
                                    <p className="text-lg stat-value">
                                        <a href={`https://twitter.com/${userItem.twitter_username}`} target="_blank" rel='noreferrer'>{userItem.twitter_username}</a>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUsers className='text-3xl md:text-5xl' />
                        </div>
                        <div className="stat-title pr-5">Followers</div>
                        <p className="stat-value pr-5 text-3xl md:text-4xl">{userItem.followers}</p>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaUserFriends className='text-3xl md:text-5xl' />
                        </div>
                        <div className="stat-title pr-5">Following</div>
                        <p className="stat-value pr-5 text-3xl md:text-4xl">{userItem.following}</p>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaCodepen className='text-3xl md:text-5xl' />
                        </div>
                        <div className="stat-title pr-5">Public Repos</div>
                        <p className="stat-value pr-5 text-3xl md:text-4xl">{userItem.public_repos}</p>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FaStore className='text-3xl md:text-5xl' />
                        </div>
                        <div className="stat-title pr-5">Public Gists</div>
                        <p className="stat-value pr-5 text-3xl md:text-4xl">{userItem.public_gists}</p>
                    </div>
                </div>

                <ReposList />
            </div>
        </>
    )
}

export default UserPage