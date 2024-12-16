// App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Members from './Members';
import Gallery from './Gallery';
import Photography from './Photography';
import ImageDetail from './ImageDetail';
import Compositions from './Compositions'; // <-- Import the new Compositions component
import Footer from './Footer'; // <-- Import the Footer component

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <nav>
            <div className="logo">
              {/* You can place your logo here */}
              <Link to="/" onClick={closeMobileMenu}>One Shot</Link>
            </div>
            <ul className={isMobileMenuOpen ? "nav-links mobile" : "nav-links"}>
              <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
              <li><Link to="/members" onClick={closeMobileMenu}>Members</Link></li>
              <li><Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link></li>
              <li><Link to="/photography" onClick={closeMobileMenu}>6 Day Photography</Link></li>
              <li><Link to="/compositions" onClick={closeMobileMenu}>Compositions</Link></li> {/* New Tab */}
            </ul>
            <div className="hamburger" onClick={handleToggle}>
              <div className={isMobileMenuOpen ? "bar change" : "bar"}></div>
              <div className={isMobileMenuOpen ? "bar change" : "bar"}></div>
              <div className={isMobileMenuOpen ? "bar change" : "bar"}></div>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/compositions" element={<Compositions />} /> {/* New Route */}
            <Route path="/gallery/:day/:imageIndex" element={<ImageDetail />} />
          </Routes>
        </main>
        <Footer /> {/* Include the Footer component here */}
      </div>
    </Router>
  );
}

export default App;
