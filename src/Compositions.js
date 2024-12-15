// Compositions.js
import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import './Compositions.css';

const compositions = [
    {
      name: 'Rule of Thirds',
      description: 'Aligning a subject with the guide lines and intersection points to create more balanced and interesting compositions.',
      images: [
        '/assets/Day 1 Color.jpg', 
        '/assets/Day 1 Thirds.jpg', 
        '/assets/Oliver/1.jpg'
      ],
    },
    {
      name: 'Frame Within Frame',
      description: 'Using natural or architectural frames to focus attention on the subject and add depth.',
      images: [
        '/assets/Ivhan/2.jpg', 
        '/assets/Raiza/3.jpg', 
        '/assets/Oliver/3.jpg'
      ],
    },
    {
      name: 'Leading Lines',
      description: 'Lines that lead the viewer’s eye to the subject, creating depth and interest.',
      images: [
        '/assets/Jancris/2.jpg', 
        '/assets/Jancris/22.jpg', 
        '/assets/Ivhan/3.jpg'
      ],
    },
    {
      name: 'Patterns and Repetition',
      description: 'Highlighting repeated shapes or forms to create a visually appealing image.',
      images: [
        '/assets/Oliver/5.jpg', 
        '/assets/Raiza/5.jpg', 
        '/assets/Ivhan/5.jpg'
      ],
    },
    {
      name: 'Color Combination',
      description: 'Using complementary or harmonious colors to enhance visual interest.',
      images: [
        '/assets/Jancris/44.jpg', 
        '/assets/Ivhan/44.jpg', 
        '/assets/Oliver/4.jpg'
      ],
    },
  ];
  

function Compositions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedComposition, setSelectedComposition] = useState('');

  const openModal = (image, compositionName) => {
    setSelectedImage(image);
    setSelectedComposition(compositionName);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedComposition('');
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
    <div className="compositions-container">
      <h1>Compositions</h1>
      <p className="intro-text">Explore various composition techniques and how they can enhance the storytelling of your photographs.</p>
      {compositions.map((comp, index) => (
        <div key={index} className="composition-section">
          <h2>{comp.name}</h2>
          <p className="composition-description">{comp.description}</p>
          <div className="composition-grid">
            {comp.images.map((image, imgIndex) => (
              <div
                key={imgIndex}
                className="composition-item"
                onClick={() => openModal(image, comp.name)}
              >
                <LazyLoad
                  height={200}
                  offset={100}
                  once
                  placeholder={
                    <div className="image-placeholder">Loading...</div>
                  }
                >
                  <img
                    src={image}
                    alt={`${comp.name} ${imgIndex + 1}`}
                    className="composition-image"
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
              height={400}
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
                alt={selectedComposition}
                className="modal-image"
              />
            </LazyLoad>
            {selectedComposition && (
              <p className="composition-name">{selectedComposition}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Compositions;
