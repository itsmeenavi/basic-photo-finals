// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Gallery from './Gallery';
import Home from './Home';
import Members from './Members'; // Import the Members component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/members">Members</Link></li> {/* Add Members link */}
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/members" element={<Members />} /> {/* Add Members route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
