import './CSS/App.css';
import './index.css';
import './App';
import MyLogo from "./images/KMCMovieLogo.jpg";
import{ motion } from 'framer-motion'
import Container from './components/Container';
import Genre from "./"



function App() {



  return (
    <div className="App">
      <header className="App-header">

        <motion.img id="ElementToAnimate" src={MyLogo} alt="Logo" initial={{y:50, scale:0}} animate={{y:-50, x:[0, 20], opacity:[3,3,3], scale:1.5}} transition={{duration:10, repeat:Infinity}}/>
       
        <a id="startBtn" href="./Container">Start</a>
        

      
        
        
      </header>
    </div>
  );
}

export default App;