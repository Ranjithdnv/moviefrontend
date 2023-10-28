import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Button } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
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
