import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useAppSelector } from '../hook/hook'

function Layout() {

    let Login = useAppSelector((state) => { return state.user._id });
    console.log(Login);
    
    return (
        Login !== "" ? <>
            <Header />
            < Outlet />
            <Footer />
        </> : <Navigate to="/" replace />
        // <Outlet />
    )
}

export default Layout