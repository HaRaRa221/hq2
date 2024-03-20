// LandingPage.js
import React from 'react';

function LandingPage({ user }) {
  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <p>This is your landing page.</p>
    </div>
  );
}

export default LandingPage;
