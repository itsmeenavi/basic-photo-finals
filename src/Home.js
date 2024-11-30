import React from 'react';
import './Home.css';

const members = [
  { name: 'Bensurto, Kurt Benjiemel R.', image: '/assets/Kurt.jpg' },
  { name: 'Dela Cruz, Oliver H.', image: '/assets/Oliver.jpg' },
  { name: 'Para, Andrea', image: '/assets/Andrea.jpg' },
  { name: 'Osiana, Raiza Mae S.', image: '/assets/Raiza.jpg' },
  { name: 'Quiming, John Carlo C.', image: '/assets/John.jpg' },
  { name: 'Salazar, Ivhan Christopher M.', image: '/assets/Ivhan.jpg' },
  { name: 'Tiu, Jancris S.', image: '/assets/Jancris.jpg' }, // Add more mock names here

];

function Home() {
  return (
    <div className="home-container">
      <h1>Model si Kurt Team Members</h1>
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

export default Home;
