import './CSS/Start.css';
import './index.css';
import './Start';
import{ motion } from 'framer-motion'
import React from "react"
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link, NavLink} from "react-router-dom";
import Layout from "./Pages/Layout";
import SearchBy from "./Pages/SearchBy";
import Home from "./Pages/Home"
import MoviesImgs from "./Pages/MovieImgs"
import About from "./Pages/About"



function Start() {
return (
      <BrowserRouter>
        <header>
          <nav>
            <h1>KMC</h1>
            <NavLink className="NavLinks" to="/">Home</NavLink>
            <NavLink className="NavLinks" to="about">About</NavLink>
            
          </nav>
        </header>

        <main> 
          <Routes>
            <Route index element={<Home />}/>
            <Route path="about" element={<About />} />
            </Routes>
        </main>
      </BrowserRouter>
)
}
export default Start;
