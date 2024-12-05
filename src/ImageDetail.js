// ImageDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ImageDetail.css';

// Import the gallery data from a separate file (if you moved it)
import galleryData from './galleryData'; // Adjust the path as necessary

const ImageDetail = () => {
  const { day, imageIndex } = useParams();
  const dayNumber = parseInt(day, 10);
  const imgIndex = parseInt(imageIndex, 10);

  // Find the day object
  const dayObj = galleryData.find((d) => d.day === dayNumber);

  if (!dayObj || imgIndex >= dayObj.images.length) {
    return (
      <div className="image-detail-container">
        <h2>Image Not Found</h2>
        <Link to="/gallery" className="back-button">Back to Gallery</Link>
      </div>
    );
  }

  const { src, caption } = dayObj.images[imgIndex];

  return (
    <div className="image-detail-container">
      <h2>{caption}</h2>
      <img src={src} alt={caption} className="detailed-image" />
      <Link to="/gallery" className="back-button">Back to Gallery</Link>
    </div>
  );
};

export default ImageDetail;
