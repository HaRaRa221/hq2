// LandingPage.js
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';

function LandingPage({ user }) {

  const handleClick = () => {
    console.log('Button clicked');
  }
  const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
      const fetchProfile = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await axios.get('/profile', {
            headers: {
              Authorization: `Bearer ${token}`
            },
          });
          setProfile(response.data);
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      };

      fetchProfile();
    }, []);

    if(!profile) {
      return <div>Loading profile...</div>;
    }

  return (
    <div>
      <Navigation />
      <h1>Welcome {profile.username}</h1>
      <p>Username: {profile.username}</p>
      <p>User ID: {profile.id}</p>
    </div>
  );
}
};

export default LandingPage;
