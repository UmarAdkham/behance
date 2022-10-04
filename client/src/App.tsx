import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./routes/Login";
import AccountPage from "./routes/AccountPage";
import Register from "./routes/Register";
import Main from "./routes/MainPage";

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
