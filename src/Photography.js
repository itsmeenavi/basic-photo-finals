// Photography.js
import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload'; // <-- Import LazyLoad
import './Photography.css';

const photographers = [
  {
    name: 'Jancris',
    images: [
      '/assets/Jancris/Jancris 1.jpg',
      '/assets/Jancris/Jancris 11.jpg',
      '/assets/Jancris/Jancris 5.jpg',
      '/assets/Jancris/Jancris 55.jpg',
      '/assets/Jancris/2.jpg',
      '/assets/Jancris/22.jpg',
      '/assets/Jancris/3.jpg',
      '/assets/Jancris/33.jpg',
      '/assets/Jancris/4.jpg',
      '/assets/Jancris/44.jpg',
      '/assets/Jancris/6.jpg',
      '/assets/Jancris/66.jpg',
    ],
  },
  {
    name: 'Ivhan',
    images: [
      '/assets/Day 1 Color.jpg',
      '/assets/Day 1 Thirds.jpg',
      '/assets/Ivhan/5.jpg',
      '/assets/Ivhan/55.jpg',
      '/assets/Ivhan/2.jpg',
      '/assets/Ivhan/22.jpg',
      '/assets/Ivhan/3.jpg',
      '/assets/Ivhan/33.jpg',
      '/assets/Ivhan/4.jpg',
      '/assets/Ivhan/44.jpg',
      '/assets/Ivhan/6.jpg',
      '/assets/Ivhan/66.jpg',
    ],
  },
  {
    name: 'Oliver',
    images: [
      '/assets/Oliver/1.jpg',
      '/assets/Oliver/2.jpg',
      '/assets/Oliver/3.jpg',
      '/assets/Oliver/4.jpg',
      '/assets/Oliver/5.jpg',
      '/assets/Oliver/6.jpg',
      '/assets/Oliver/7.jpg',
    ],
  },
  {
    name: 'Raiza',
    images: [
      '/assets/Raiza/1.jpg',
      '/assets/Raiza/2.jpg',
      '/assets/Raiza/3.jpg',
      '/assets/Raiza/4.jpg',
      '/assets/Raiza/5.jpg',
      '/assets/Raiza/6.jpg',
    ],
  },
  // Add more photographers as needed
];

function Photography() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPhotographer, setSelectedPhotographer] = useState('');

  const openModal = (image, photographerName) => {
    setSelectedImage(image);
    setSelectedPhotographer(photographerName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedPhotographer('');
  };

  useEffect(() => {
    if (isModalOpen) {
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable background scrolling
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <div className="photography-container">
      <h1>6 Day Photography</h1>
      {photographers.map((photographer, index) => (
        <div key={index} className="photographer-section">
          <h2>{photographer.name}</h2>
          <div className="collage">
            {photographer.images.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className={`collage-item item-${imgIndex % 6}`}
                onClick={() => openModal(image, photographer.name)}
              >
                <LazyLoad
                  height={200} // Placeholder height; adjust as needed
                  offset={100} // Start loading 100px before image is in viewport
                  once // Load the image only once
                  placeholder={
                    <div className="image-placeholder">
                      {/* You can add a spinner or a blurred version of the image here */}
                      Loading...
                    </div>
                  }
                >
                  <img
                    src={image}
                    alt={`${photographer.name} ${imgIndex + 1}`}
                  />
                </LazyLoad>
              </div>
            ))}
          </div>
        </div>
      ))}

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <LazyLoad
              height={400} // Adjust based on your design
              offset={100}
              once
              placeholder={
                <div className="image-placeholder">
                  {/* Placeholder for modal image */}
                  Loading...
                </div>
              }
            >
              <img
                src={selectedImage}
                alt={selectedPhotographer}
                className="modal-image"
              />
            </LazyLoad>
            {selectedPhotographer && (
              <p className="photographer-name">{selectedPhotographer}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Photography;
