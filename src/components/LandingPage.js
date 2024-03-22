// LandingPage.js
import React from 'react';

function LandingPage({ user }) {
  const [achievements, setAchievements] = React.useState([]);
  const [bio, setBio] = React.useState('');
  const [data, setData] = React.useState({});
  const [points, setPoints] = React.useState([]);
  const [settings, setSettings] = React.useState({});

  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <p>This is your landing page.</p>
      
      <h2>Bio Information: {bio}</h2>

      <h3>Your achievements: {achievements} </h3>

      <h3>Your data: {data} </h3>

      <h3>Your points: {points} </h3>

      
      

    </div>
  );
}

export default LandingPage;
