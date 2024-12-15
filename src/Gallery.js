// Gallery.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Gallery.css';
import galleryData from './galleryData'; // Adjust the path as necessary

const Gallery = () => {
  return (
    <div className="gallery-container">
      {galleryData.map((day, dayIndex) => (
        <div key={dayIndex} className="gallery-card">
          <h2>Day {day.day}</h2>
          <div className="gallery-images">
            {day.images.map((image, imageIndex) => (
              <Link 
                to={`/gallery/${day.day}/${imageIndex}`} 
                key={imageIndex} 
                className="image-link"
              >
                <div className="image-container">
                  <img src={image.src} alt={image.caption} />
                </div>
                <p className="image-caption">{image.caption}</p>
                <p className="description">{image.description}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
