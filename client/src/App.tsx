import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./router/Login";
// import Login from "./router/Login";
import Register from "./router/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} ></Route>
        <Route path="register" element={<Register />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
