import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountPage from "./routes/AccountPage";
import EditPage from "./routes/EditPage";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Main from "./routes/Main";
import "./style/account-page.scss";
import UserPhoto from "./routes/UserPhoto";
import Layout from "./routes/Layout";
import NoPage from "./routes/NoPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="layout" element={<Layout />} >
          <Route index element={<Main />}></Route>
          <Route path="accountPage" element={<AccountPage />}></Route>
          <Route path="addPhoto" element={<UserPhoto />}></Route>
          <Route path="edit" element={<EditPage />}></Route>
        </Route>
        <Route path="*"  element={<NoPage />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
