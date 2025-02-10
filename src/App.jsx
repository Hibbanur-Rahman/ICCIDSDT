import React, { useState } from "react";
import './assets/styles/main.scss'
import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="fontFamily-poppins">
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
