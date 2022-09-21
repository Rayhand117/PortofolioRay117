import React from 'react';
import './home.css';
import ProfilePicture from '../../assets/ProfilePicture.jpg'

function Home() {
  return (
    <div className='ok fleks'>
        <h1 className='clips'>My Profile</h1>
        <div className='profil fleks'>
          <img src={ProfilePicture} alt="Rayhand" className="profilPict" />
          <p>Rayhand Fernanda Viantama</p>
          <p>Love to Code</p>
          <p>Afraid of what A.I. could do in the future:v</p>
        </div>
        <div className='block1 leftBlue boxShadow'></div>
        <div className='block2 boxShadow'></div>
        <div className="leftBlue block3 leftBLue boxShadow"></div>
        <p className='clips leftBlue notFinal'>Not Final Design lol</p>
    </div>
  );
}

export default Home;
