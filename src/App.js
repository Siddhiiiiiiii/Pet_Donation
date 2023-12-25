import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import About from './About';
import Services from './Services';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>

      <Routes> 
        
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />

        
        </Routes>
     
    </div>
    </Router>
  );
}

export default App;
