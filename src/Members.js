// Members.js
import React from 'react';
import './Members.css';

const members = [
  { name: 'Bensurto, Kurt Benjiemel R.', image: '/assets/Bensurto Candid.jpg' },
  { name: 'Dela Cruz, Oliver H.', image: '/assets/DelaCruz Candid.jpg' },
  { name: 'Para, Andrea', image: '/assets/Para Candid.jpg' },
  { name: 'Osiana, Raiza Mae S.', image: '/assets/Osiana Candid.jpg' },
  { name: 'Quiming, John Carlo C.', image: '/assets/Quiming Candid.jpg' },
  { name: 'Salazar, Ivhan Christopher M.', image: '/assets/Salazar Candid.jpg' },
  { name: 'Tiu, Jancris S.', image: '/assets/Tiu Candid.jpg' }, // Add more mock names here
];

function Members() {
  return (
    <div className="members-container">
      <h1>Members</h1>
      <div className="team-members">
        {members.map((member, index) => (
          <div key={index} className="member-card">
            <img src={member.image} alt={member.name} />
            <p>{member.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;
