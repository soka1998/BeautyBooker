
import "./App.css";
import HeroPage from "./components/HeroPage";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
import Home from "./components/Home"
import background from './assets/background.png';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutUs from "./components/AboutUs";



function App() {
  return (
   <Router>
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
     <NavBar/>
     <Home/>
     <Services/>
     <AboutUs/>
     </div>
     {/* <HeroPage/> */}
  
    </Router>
  );
}

export default App;
