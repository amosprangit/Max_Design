import React from "react";
import "./App.css";
import Header from "./pages/header";
import Home from "./pages/home";
import About from "./pages/about";
import Design from "./pages/design";
import Sign from "./pages/signIn";
import Footer from "./pages/footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/design" element={<Design />} />
        <Route path="/signIn" element={<Sign />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
