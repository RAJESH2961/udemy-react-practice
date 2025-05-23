export function getAuthToken() {
    const token = localStorage.getItem('token');
    return token;
}

export function tokenLoader(){
    return getAuthToken();// here we have token returned by above function
}