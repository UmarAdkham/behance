import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./router/Login";
import AccountPage from "./routes/AccountPage";
import Register from "./routes/Register";
import './style/account-page.scss'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} ></Route>
        <Route path="register" element={<Register />} ></Route>
        <Route path="accountPage" element={<AccountPage />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
