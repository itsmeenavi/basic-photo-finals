// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Members from './Members';
import Gallery from './Gallery';
import Photography from './Photography';
import ImageDetail from './ImageDetail';
import Compositions from './Compositions'; // <-- Import the new Compositions component

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
              <li><Link to="/photography">6 Day Photography</Link></li>
              <li><Link to="/compositions">Compositions</Link></li> {/* New Tab */}
            </ul>
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
      </div>
    </Router>
  );
}

export default App;
