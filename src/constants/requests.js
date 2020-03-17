const HostDictionaryByEnv = {
  development: 'http://localhost:8000',
  production: 'http://ec2-46-51-226-242.ap-northeast-1.compute.amazonaws.com',
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
export const GET_OPEN_KAKAO_PATH = (profileId) => `/api/profiles/${profileId}/chat-link/`;

export const FETCH_POINT_PATH = '/api/coin-histories/';

export const REGISTER_SELSO_PATH = '/api/profiles/';
export const UPDATE_PROFILE_PATH = '/api/profiles/';
