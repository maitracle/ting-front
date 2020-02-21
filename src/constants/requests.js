// const connectionEnvToHost = {
//   development: 'http://localhost:8000',
// };
const HostDictionaryByEnv = {
  development: 'http://localhost:8000',
};


// export const HOST = connectionEnvToHost[process.env.NODE_ENV];
export const HOST = HostDictionaryByEnv[process.env.NODE_ENV];
export const GET_PROFILE_LISTS_PATH = '/api/profiles/';
export const LOGIN_PATH = '/api/tokens/';
export const SIGN_IN_PATH = '/api/users/';
export const REFRESH_TOKENS_PATH = '/api/tokens/refresh/';
export const FETCH_LIKE_PATH = '/api/likes/';
