import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../hook/hook'

function Layout() {

    let Login = useAppSelector((state) => { return state.user._id });
    console.log(Login);
    

    return (
        Login !== "" ? < Outlet /> : <Navigate to="/" replace/>
        // <Outlet />
    )
}

export default Layout