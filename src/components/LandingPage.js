// LandingPage.js
import React from 'react';

function LandingPage({ user }) {

  const handleClick = () => {
    console.log('Button clicked');
  }
  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <p>This is your landing page.</p>
      <button onClick={handleClick}>Click this button</button>
      <>
        <h2>Another heading</h2>
        <p>Another paragraph</p>
        <form>
          <input type="text" placeholder="Enter something" />
          <button onClick={handleClick}>Submit</button>
        </form>

        <li>Achievements</li>
        <li>Settings</li>
        <li>Logout</li>
        <ul>Challenges</ul>

        
      </>
    </div>
  );
}

export default LandingPage;
