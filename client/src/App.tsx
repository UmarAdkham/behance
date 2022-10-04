import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountPage from "./routes/AccountPage";
import Login from "./routes/Login";
import Main from "./routes/Main";
import Register from "./routes/Register";
import UserPhoto from "./routes/UserPhoto";
import "./style/account-page.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="accountPage" element={<AccountPage />}></Route>
        <Route path="main" element={<Main />}></Route>
        <Route path="photoAdd" element={<UserPhoto />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
