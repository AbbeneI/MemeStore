// Import all named exports attached to a usersAPI object
// This syntax can be helpful documenting where the methods come from 
import * as usersApi from './users-api'

export async function signUp(userData) {
    console.log('userData in users-service', userData)
    // Delegate the network request code to the users-api
    //which will ultimately return a JSON web Token

    const token = await usersApi.signUp(userData)
    //we'll return the token that we received from the api
    localStorage.setItem('token', token);

    return getUser()
}

export async function login(credentials){
    try {
        const token = await usersApi.login(credentials)
        localStorage.setItem('token', token)
        return getUser()
    } catch {
        throw new Error("Bad Credentials")
    }
}


// getToken function - assesses the token in local storage
export function getToken() {
    const token = localStorage.getItem('token')
    //getItem, a method of the local storage object, returns null if there is no string
    if (!token) return null
    //obtain the payload of the token

    const payload = JSON.parse(atob(token.split('.')[1]))
    // a JWT's expiration is expressed in seconds not milliseconds
    if (payload.exp < Date.now() / 1000) {
        // token is expired remove it from local storage
        localStorage.removeItem('token')
    }
    return token;
}

//getUser function - parses the data from the token's payload
export function getUser() {
    const token = getToken()
    //if there is a token, return the user in the payload
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

//logout - deletes the token from our localStorage
export function logOut(){
    localStorage.removeItem('token')
}

export function checkToken(){
    return usersApi.checkToken()
        //we can't forget how to use .then with promises
    .then(dateStr => new Date(dateStr))
}