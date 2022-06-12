import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./register";
import Login from "./login";
import Homepage from "./nhome";
function App() {
  return (
    <BrowserRouter>
      <h1>nero-Quary</h1>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
