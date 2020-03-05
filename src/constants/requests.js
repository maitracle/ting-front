const HostDictionaryByEnv = {
  development: 'http://localhost:8000',
};


export const HOST = HostDictionaryByEnv[process.env.NODE_ENV];

export const LOGIN_PATH = '/api/users/tokens/';
export const REFRESH_TOKENS_PATH = '/api/users/tokens/refresh/';
export const SIGN_UP_PATH = '/api/users/';
export const CHECK_UNIV_EMAIL_PATH = (user_id) => `/api/users/${user_id}/check-univ/`;
export const CONFIRM_USER_PATH = '/api/users/confirm-user/';


export const GET_PROFILE_LISTS_PATH = '/api/profiles/';
export const GET_PROFILE_RETRIEVE_PATH = '/api/profiles/';
export const GET_MY_USER_PATH = '/api/users/my/';

export const FETCH_POINT_PATH = '/api/coin-histories/';
export const UPDATE_PROFILE_PATH = '/api/profiles/';
