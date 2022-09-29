import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountPage from "./router/AccountPage";
import Login from "./router/Login";
import Main from "./router/Main";
import Register from "./router/Register";
import "./style/account-page.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="accountPage" element={<AccountPage />}></Route>
        <Route path="main" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
