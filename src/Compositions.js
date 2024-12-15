// Compositions.js
import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import './Compositions.css';

const compositions = [
  {
    name: 'Rule of Thirds',

    images: [
      '/assets/Andrea/Rules_of_thirds_Andrea.jpg',
      '/assets/Andrea/Rules_of_thirds_Andrea2.jpg',
      '/assets/Andrea/Rules_of_thirds_Andrea3.jpg',
    ],
  },
  {
    name: 'Rule of Odds',

    images: [
      '/assets/Ivhan/2.jpg',
      '/assets/compo/Odds.jpg',
      '/assets/compo/Odds2.jpg',
    ],
  },
  {
    name: 'Fill the Frame',
   
    images: [
      '/assets/compo/Fillframe1.jpg',
      '/assets/compo/Fillframe2.jpg',
      '/assets/Day 6 Fill.jpg',
    ],
  },
  {
    name: 'Frame within Frame',

    images: [
      '/assets/compo/Frame1.jpg',
      '/assets/compo/Frame2.jpg',
      '/assets/compo/Frame3.jpg',
    ],
  },
  {
    name: 'View Point',

    images: [
      '/assets/Day 6 Viewpoint.jpg',
      '/assets/Ivhan/44.jpg',
      '/assets/compo/View.jpg',
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
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <div className="compositions-container">
      <h1>Compositions</h1>
      <p className="intro-text">
       5 Compositions, 3 pictures each. 15 pictures in total.
      </p>
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
                  placeholder={<div className="image-placeholder">Loading...</div>}
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
            <h2 className="modal-title">{selectedComposition}</h2>
            <LazyLoad
              height={400}
              offset={100}
              once
              placeholder={<div className="image-placeholder">Loading...</div>}
            >
              <img
                src={selectedImage}
                alt={selectedComposition}
                className="modal-image"
              />
            </LazyLoad>
          </div>
        </div>
      )}
    </div>
  );
}

export default Compositions;
