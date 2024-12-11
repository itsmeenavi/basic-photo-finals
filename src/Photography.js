// Photography.js
import React from 'react';
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
  // Add more photographers as needed
];

function Photography() {
  return (
    <div className="photography-container">
      <h1>5 Day Photography</h1>
      {photographers.map((photographer, index) => (
        <div key={index} className="photographer-section">
          <h2>{photographer.name}</h2>
          <div className="collage">
            {photographer.images.map((image, imgIndex) => (
              <div key={imgIndex} className={`collage-item item-${imgIndex % 6}`}>
                <img src={image} alt={`${photographer.name} ${imgIndex + 1}`} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Photography;
