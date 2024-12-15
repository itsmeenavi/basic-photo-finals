// Members.js
import React from 'react';
import './Members.css';

const members = [
  {
    name: 'Bensurto, Kurt Benjiemel R.',
    images: [
      '/assets/Bensurto Candid.jpg',
      '/assets/Kurt/Kurt2.jpg',
      '/assets/Kurt/Kurt3.jpg',
    ],
  },
  {
    name: 'Dela Cruz, Oliver H.',
    images: [
      '/assets/Oliver.jpg',
      '/assets/Oliver/Oli.jpg',
      '/assets/Oliver/Oli2.jpg',
    ],
  },
  {
    name: 'Osiana, Raiza Mae',
    images: [
      '/assets/Raiza.jpg',
      '/assets/Raiza/Raiza2.jpg',
      '/assets/Raiza/Raiza3.jpg',
    ],
  },
  {
    name: 'Para, Andrea',
    images: [
      '/assets/Andrea.jpg',
      '/assets/Para Candid.jpg',
      '/assets/Para.jpg',
    ],
  },
  {
    name: 'Quiming, John Carlo',
    images: [
      '/assets/Quiming Candid.jpg',
      '/assets/Carlo/Carlo.jpg',
      '/assets/Carlo/Carlo2.jpg',
    ],
  },
  {
    name: 'Salazar, Ivhan Christopher',
    images: [
      '/assets/Ivhan.jpg',
      '/assets/Ivhan/Ivhan.jpg',
      '/assets/Ivhan/Ivhan6.jpg',
    ],
  },
  {
    name: 'Tiu, Jancris',
    images: [
      '/assets/Jancris/Jancris.jpg',
      '/assets/Jancris/Jancris2.jpg',
      '/assets/Jancris/Jancris3.jpg',
    ],
  },
  // ... add other members similarly
];

function Members() {
  return (
    <div className="members-container">
      <h1>Members</h1>
      <div className="team-members">
        {members.map((member, index) => (
          <div key={index} className="member">
            <p className="member-name">{member.name}</p>
            <div className="member-images">
              {member.images.map((imgSrc, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imgSrc}
                  alt={`View ${imgIndex + 1} of ${member.name}`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
