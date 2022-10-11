import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountPage from "./routes/AccountPage";
import EditPage from "./routes/EditPage";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Main from "./routes/Main";
// import "./style/account-page.scss";
import UserPhoto from "./routes/UserPhoto";
import Layout from "./routes/Layout";
import NoPage from "./routes/NoPage";
import Jobs from "./components/Jobs";
import NFT from "./components/NFT";
import Live from "./components/Live";
import MoodBoards from "./components/MoodBoards";
import Evaluation from "./components/Evaluation";
import Analysis from "./components/Analysis";
import Drafts from "./components/Drafts";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="user" element={<Layout />} >
          <Route index element={<Main />}></Route>
          <Route path="accountPage" element={<AccountPage />}>
            <Route path="ish" element={<Jobs/>}></Route>
            <Route path="nft" element={<NFT/>}></Route>
            <Route path="jonliefir" element={<Live/>}></Route>
            <Route path="kayfiyatDoskasi" element={<MoodBoards/>}></Route>
            <Route path="baholash" element={<Evaluation/>}></Route>
            <Route path="tahlil" element={<Analysis/>}></Route>
            <Route path="qoralama" element={<Drafts/>}></Route>
          </Route>
          <Route path="addPhoto" element={<UserPhoto />}></Route>
          <Route path="edit" element={<EditPage />}></Route>
        </Route>
        <Route path="*"  element={<NoPage />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
