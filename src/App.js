// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Members from './Members'; // Import the Members component
import Gallery from './Gallery';
import Photography from './Photography'; // Import the Photography component
import ImageDetail from './ImageDetail'; // Import the ImageDetail component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/members">Members</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/photography">5 Day Photography</Link></li> {/* Add link for Photography */}
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/photography" element={<Photography />} /> {/* Add Photography route */}
            <Route path="/gallery/:day/:imageIndex" element={<ImageDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
