// Photography.js
import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import Masonry from 'react-masonry-css'; // Import Masonry
import './Photography.css';

const photographers = [
  {
    name: 'Jancris Tiu',
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
    name: 'Ivhan Salazar',
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
    name: 'Oliver Dela Cruz',
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
    name: 'Raiza Osiana',
    images: [
      '/assets/Raiza/1.jpg',
      '/assets/Raiza/2.jpg',
      '/assets/Raiza/3.jpg',
      '/assets/Raiza/4.jpg',
      '/assets/Raiza/5.jpg',
      '/assets/Raiza/6.jpg',
    ],
  },
  {
    name: 'Andrea Para',
    images: [
      '/assets/Andrea/1.jpg',
      '/assets/Andrea/2.jpg',
      '/assets/Andrea/3.jpg',
      '/assets/Andrea/4.jpg',
      '/assets/Andrea/5.jpg',
      '/assets/Andrea/6.jpg',
      '/assets/Andrea/7.jpg',
      '/assets/Andrea/8.jpg',
      '/assets/Andrea/9.jpg',
      '/assets/Andrea/10.jpg',
      '/assets/Andrea/11.jpg',
      '/assets/Andrea/12.jpg',
      '/assets/Andrea/13.jpg',
      '/assets/Andrea/14.jpg',
    ],
  },
  {
    name: 'Kurt Bensurto',
    images: [
      '/assets/Kurt/1.jpg',
      '/assets/Kurt/2.jpg',
      '/assets/Kurt/3.jpg',
      '/assets/Kurt/4.jpg',
      '/assets/compo/Frame1.jpg',
      '/assets/compo/Frame2.jpg',
      '/assets/compo/Frame3.jpg',
     
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

  // Define Masonry breakpoints
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className="photography-background">
      <div className="photography-container">
        <h1>6 Day Photography</h1>
        {photographers.map((photographer, index) => (
          <div key={index} className="photographer-section">
            <h2>{photographer.name}</h2>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="collage"
              columnClassName="collage-column"
            >
              {photographer.images.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="collage-item"
                  onClick={() => openModal(image, photographer.name)}
                >
                  <LazyLoad
                    height={200} // Placeholder height; adjust as needed
                    offset={100} // Start loading 100px before image is in viewport
                    once // Load the image only once
                    placeholder={
                      <div className="image-placeholder">
                        Loading...
                      </div>
                    }
                  >
                    <img
                      src={image}
                      alt={`${photographer.name} ${imgIndex + 1}`}
                      className="photography-image"
                    />
                  </LazyLoad>
                </div>
              ))}
            </Masonry>
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
    </div>
  );
}

export default Photography;
