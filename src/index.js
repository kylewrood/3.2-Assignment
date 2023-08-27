import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Start from "./Start";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBy from "./Pages/SearchBy";
import Layout from "./Pages/Layout";
import "./fonts/Ritz/Ritzflf-lgd0.ttf"
import Container from "./components/Container"

            


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Container />
  </React.StrictMode>
);
