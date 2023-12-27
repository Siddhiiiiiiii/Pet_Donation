import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Services from './Pages/Services';
import Footer from './Pages/Footer';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>

      <Routes basename="/Pet_Donation"> 
        
        <Route path="/Pet_Donation" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />

        
        </Routes>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
