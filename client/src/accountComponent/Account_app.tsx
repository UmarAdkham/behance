import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AccountLayout from './AccountLayout'
import Ish from './Ish'
import JonliEfir from './JonliEfir'
import KayfiyatDoskasi from './KayfiyatDoskasi'
import Nft from './Nft'
import Qoralamalar from './Qoralamalar'
import Reytinglar from './Reytinglar'
import Tahlil from './Tahlil'



function Account_app() {
  return (
    <BrowserRouter>  
    <Routes>
        <Route path='/' element={<AccountLayout/>}>           
            <Route path='/' element={<Ish/>}></Route>
            <Route path='/' element={<Nft/>}></Route>
            <Route path='/' element={<JonliEfir/>}></Route>
            <Route path='/' element={<KayfiyatDoskasi/>}></Route>
            <Route path='/' element={<Reytinglar/>}></Route>
            <Route path='/' element={<Tahlil/>}></Route>
            <Route path='/' element={<Qoralamalar/>}></Route>
        </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Account_app