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

      <Routes> 
        
        <Route path="/Pet_Donation" element={<Home />} />
        <Route path="/Pet_Donation/Contact" element={<Contact />} />
        <Route path="/Pet_Donation/About" element={<About />} />
        <Route path="/Pet_Donation/Services" element={<Services />} />

        
        </Routes>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
