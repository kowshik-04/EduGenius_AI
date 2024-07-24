import React from 'react';
import '../styles.css';
import Navbar from './Navbar';
import VideoPlayer from './VideoPlayer';

function Home() {
  return (
    <div className="container">
      <Navbar />
      <main>
        <VideoPlayer />
        <div className="content">
          <h2>Welcome to EduGenius AI</h2>
          <p>Your personalized learning assistant.</p>
        </div>
      </main>
    </div>
  );
}

export default Home;
