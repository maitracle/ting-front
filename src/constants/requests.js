const HostDictionaryByEnv = {
  development: 'http://localhost:8000',
};


export const HOST = HostDictionaryByEnv[process.env.NODE_ENV];

export const LOGIN_PATH = '/api/users/tokens/';
export const REFRESH_TOKENS_PATH = '/api/users/tokens/refresh/';
export const SIGN_UP_PATH = '/api/users/';

export const GET_PROFILE_LISTS_PATH = '/api/profiles/';
export const GET_MY_PROFILE_PATH = '/api/profiles/my/';


export const FETCH_LIKE_PATH = '/api/likes/';
