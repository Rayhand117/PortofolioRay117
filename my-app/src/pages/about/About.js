import React from 'react';
import '../home/home.css'

function About() {
  return (
    <div className='ok fleks'>
        <h1 className='clips'>About Me</h1>
        <div className='profil fleks'>
          {/* <img src={ProfilePicture} alt="Rayhand" className="profilPict" /> */}
          <p>Mahasiswa Semester 5 ketika tulisan ini ditulis, Saya memiliki antusias yang tinggi di bidang Front-End Web Development. Saat ini sedang belajar React JS:v</p>
        </div>
        <div className='block1 leftBlue boxShadow'></div>
        <div className='block2 boxShadow'></div>
        <div className="leftBlue block3 leftBLue boxShadow"></div>
        <p className='clips leftBlue notFinal'>Not Final Design lol</p>
    </div>
  );
}

export default About;