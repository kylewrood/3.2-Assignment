import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import GenreCat from "./GenreCat";




const searchBy = () => {
    return (
    <div>
                <h1>Search By:</h1>
                <button>Genre</button>
                <button>Movie Titles</button>
                <a id="startBtn" href="./GenreCat">2ndPage</a>
                
    </div>
)
  };
  
  export default searchBy;
  