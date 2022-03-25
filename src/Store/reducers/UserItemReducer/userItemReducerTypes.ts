

export const USER_ITEM_REQUEST_SUCCESS = 'USER_ITEM_REQUEST_SUCCESS';
export const USER_ITEM_REQUEST_ERROR = 'USER_ITEM_REQUEST_ERROR';
export const USER_ITEM_REQUEST = 'USER_ITEM_REQUEST';
export const USER_ITEM_REQUEST_REPOS = 'USER_ITEM_REQUEST_REPOS';
export const USER_ITEM_CLEAR = 'USER_ITEM_CLEAR';


export interface UserItem {
    bio: string;
    blog: string;
    name: string;
    type: string;
    login: string;
    location: string;
    html_url: string;
    avatar_url: string;
    created_at: string;
    followers: number;
    following: number;
    public_repos: number;
    public_gists: number;
    twitter_username: string | null;
    hireable: boolean | null;
    email: string | null;
}

export interface UserItemRepoType {
    id: number;
    name: string;
    description: string;
    html_url: string;
    forks: number;
    open_issues: number;
    watchers_count: number;
    stargazers_count: number;
}

export interface UserItemRequestSuccessType {
    type: typeof USER_ITEM_REQUEST_SUCCESS,
    payload: {
        userItem: UserItem;
    }
}

export interface UserItemRequest {
    type: typeof USER_ITEM_REQUEST;
    payload: {
        loading: true;
    }
}

export interface UserItemRequestError {
    type: typeof USER_ITEM_REQUEST_ERROR;
    payload: {
        error: Error;
    }
}

export interface UserItemRequestRepos {
    type: typeof USER_ITEM_REQUEST_REPOS;
    payload: {
        userRepos: UserItemRepoType[];
    }
}

export interface UserItemClear {
    type: typeof USER_ITEM_CLEAR;
}

export interface UserItemStateType {
    loading: boolean;
    error: Error | null;
    userItem: UserItem | null;
    userRepos: any;
}



export type ActionUserItemType = UserItemRequest | UserItemRequestError | UserItemRequestSuccessType | UserItemClear | UserItemRequestRepos;