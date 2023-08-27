import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <button>
        <Link to="/">Back</Link>
      </button>
      <button>
        <Link to="./Pages/MovieImgs.js">Movie Titles</Link>
      </button>
      <button>
        <Link to="./Pages/GenreCat.js">Genre</Link>
      </button>
            
            

        
        
    <Outlet />
    </>
  )
};

export default Layout;
