import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles.css';
import Navbar from './Navbar';

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Fetch user profile
        const response = await axios.get(`http://localhost:5000/api/users/${id}`);
        setUser(response.data);

        // Fetch recommendations
        const recommendationResponse = await axios.post('http://localhost:5000/api/recommendations', { userId: id });
        setRecommendations(recommendationResponse.data.recommendations);
      } catch (error) {
        console.error('Failed to fetch data', error);
      }
    };

    fetchUserProfile();
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="container">
      <Navbar />
      <main className="user-profile">
        <div className="profile-info">
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <pre>{JSON.stringify(user.progress, null, 2)}</pre>
        </div>
        <div className="recommendations">
          <h2>Recommendations</h2>
          <ul>
            {Object.entries(recommendations).map(([lesson, score]) => (
              <li key={lesson}>{lesson}: {score}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default UserProfile;
