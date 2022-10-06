import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../hook/hook'

function Layout() {

    let Login = useAppSelector((state) => { return state.user._id })

    return (
        Login != "" ? < Outlet /> : <Navigate to="/" />
    )
}

export default Layout