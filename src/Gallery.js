import React, { useState } from 'react';
import './Gallery.css';

const galleryImages = [
  { day: 1, images: ['/assets/Day 1 Color.jpg', '/assets/Day 1 Thirds.jpg'] },
  { day: 2, images: ['/assets/Day 2 Odds.jpg', '/assets/Day 2 Frame.jpg'] },
  { day: 3, images: ['/assets/Day 3 Fill the frame.jpg', '/assets/Day 3 Pattern.jpg'] },
  { day: 4, images: ['/assets/Day 4.jpg', '/assets/Day 4 direct.jpg'] },
  { day: 5, images: ['/assets/Day 5 pasko.jpg', '/assets/Day 5 Symmetry.jpg'] },
  { day: 6, images: ['/assets/Day 6 Fill.jpg', '/assets/Day 6 Viewpoint.jpg'] },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      {galleryImages.map((day, index) => (
        <div key={index} className="gallery-card">
          <h2>Day {day.day}</h2>
          <div className="gallery-images">
            <div 
              className="image-container"
              onClick={() => handleImageClick(day.images[0])}
            >
              <img src={day.images[0]} alt={`Day ${day.day} Image 1`} />
            </div>
            <div 
              className="image-container"
              onClick={() => handleImageClick(day.images[1])}
            >
              <img src={day.images[1]} alt={`Day ${day.day} Image 2`} />
            </div>
          </div>
        </div>
      ))}

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Selected" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
