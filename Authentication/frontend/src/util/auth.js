import { redirect } from "react-router-dom";

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new DataTransfer();
    const duration = expirationDate.getTime() - now.getTime();

    return duration;
}

export function getAuthToken() {
    const token = localStorage.getItem('token');
    if(!token){
        return;
    }
    const tokenDuration = getTokenDuration();
    if(tokenDuration < 0) {
        return 'EXPIRED';
    }
    return token;
}

export function tokenLoader(){
    return getAuthToken();// here we have token returned by above function
}
// Protecting route if user enter editpage route if he didnt login
// Check if loader is exist or not
export function checkAuthLoader() {
    const token = getAuthToken();
    if(!token) {
    return redirect('/auth');
}
return '';
}