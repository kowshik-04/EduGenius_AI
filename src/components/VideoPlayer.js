import React from 'react';
import '../styles.css';  // Correct path

function VideoPlayer() {
  return (
    <div className="video-player">
      <video width="100%" controls>
        <source src="video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
