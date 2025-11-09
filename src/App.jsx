import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import AboutStats from "./pages/AboutStats";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <AboutStats />
              <Portfolio />
              <Contact />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
