// RootLayout.js
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";
import classes from './Root.module.css';
function RootLayout() {
    return <>
    <MainNavigation/> // Common NAv bar
    <main className={classes.content}>
    <Outlet/> //Here the outlet contains Home page and products which is decalred in App,jsx nested
    </main>
    </>

}

export default RootLayout;