import { redirect } from "react-router-dom";
export function getAuthToken() {
    const token = localStorage.getItem('token');
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