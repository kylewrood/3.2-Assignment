import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import searchBy from "./SearchBy"

const genreCat = () => {
    return <div>
                <h1>Genre Category:</h1>;
                <button>Romanace</button>;
                <button>Comedy</button>
                <a id="startBtn" href="./GenreCat">3ndPage</a>
            </div>

  };
  
  export default genreCat;