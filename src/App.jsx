
import "./App.css";

import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Home from "./components/Home"
import background from './assets/background.png';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutUs from "./components/AboutUs";
import Pricing from "./components/Pricing";



function App() {
  return (
   <Router>
    <NavBar/>
     
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
     <Home/>

     <Services/>
     <Pricing/>
     <AboutUs/>
     </div>
    
  
    </Router>
  );
}

export default App;
