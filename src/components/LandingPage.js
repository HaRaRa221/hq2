// LandingPage.js
import React from 'react';
import AvatarEditor from 'react-avatar-editor';
import Navigation from './Navigation';

function LandingPage({ user }) {
  const [achievements, setAchievements] = React.useState([]);
  const [bio, setBio] = React.useState('');
  const [data, setData] = React.useState({});
  const [points, setPoints] = React.useState([]);
  const [settings, setSettings] = React.useState({});

  class profile {
    constructor(achievements, bio, data, points, settings) {
      this.achievements = achievements;
      this.bio = bio;
      this.data = data;
      this.points = points;
      this.settings = settings;
    }
  }
  return (
    <div>
      <Navigation />
      <h2>Welcome, {user}!</h2>
      <p>This is your landing page.</p>
      
      <h2>Bio Information: {bio}</h2>

      <h3>Your achievements {'>'}: {achievements} </h3>

      <h3>Your data: {data} </h3>

      <h3>Your points: {points} </h3>


      

    </div>
  );
}

export default LandingPage;
