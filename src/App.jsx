import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Button } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import { useContext } from "react";
import Moviestory from "./components/moviestory";
import Director from "./components/directorpage";
import Hero from "./components/heropage";
import Heroine from "./components/heroine";
import Musician from "./components/musicdirector";
import { CountContext } from "./context";

function App() {
  const Contexts = useContext(CountContext);
  console.log(Contexts.us);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={Contexts.us.email ? <Home /> : <Login />} />
        <Route path="/moviestory" element={<Moviestory />} />
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/heroes" element={<Hero />} />{" "}
        <Route path="/heroines" element={<Heroine />} />{" "}
        <Route path="/directors" element={<Director />} />{" "}
        <Route path="/musicians" element={<Musician />} />
        {/* <Route path="/" element={Contexts.us.username ? <Home /> : <Login />} />
       <Route path="/create" element={<Create />} />
      <Route path="/messagechat" element={<Messagechat />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/chatwithpost" element={<Post />} />
      <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;
