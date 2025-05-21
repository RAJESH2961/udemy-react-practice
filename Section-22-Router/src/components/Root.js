// RootLayout.js
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
// import classes from './Root.module.css';
function RootLayout() {
    return <>
    {/* // Common NAv bar */}
    <MainNavigation/> 
    <main>
        {/* //Here the outlet contains Home page and products which is decalred in App,jsx nested */}
    <Outlet/> 
    </main>
    </>

}

export default RootLayout;