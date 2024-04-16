import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route,Navigate} from 'react-router-dom'

import "./index.scss";
import HomePage from "./pages/HomePage";
import PersonajesPage from "./pages/PersonajesPage";
import AboutPage from "./pages/AboutPage";
import NotFound from  "./pages/NotFound";

import Navbar from "mf_navbar/Navbar";

const App = () => (
  <BrowserRouter>

    <Navbar/>

    <div className="mx-10 mt-10">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/personajes" element={<PersonajesPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="*" element={<NotFound/>} />
        {/* <Route path="*" element={<Navigate to="/"/>} /> */}
      </Routes>
    </div>
    
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
