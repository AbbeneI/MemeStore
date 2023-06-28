import sendRequest from './send-request';
// we need a base path that we can use to refer our requests to the locatin of our routes
const BASE_URL = "./api/users";

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken(){
  return sendRequest(`${BASE_URL}/check-token`);
}