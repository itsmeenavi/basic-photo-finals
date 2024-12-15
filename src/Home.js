// Home.js
import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  }

  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div className="home-container">
      <h1>Best Picture</h1>
      
      {/* Primary image (Day 6 Viewpoint) */}
      <div className="image-wrapper">
        <img 
          src="/assets/Day 6 Viewpoint.jpg" 
          alt="Day 6 Viewpoint" 
          className="home-image" 
        />
      </div>

      {/* Group image thumbnail (clickable) */}
      <div className="thumbnail-wrapper" onClick={openModal}>
        <img 
          src="/assets/group.jpg" 
          alt="Group" 
          className="thumbnail-image" 
        />
        <p className="thumbnail-text">Click to view the group photo</p>
      </div>

      {/* Modal for viewing the group image */}
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src="/assets/group.jpg" 
              alt="Group Large" 
              className="modal-image" 
            />
            <button className="close-button" onClick={closeModal}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
