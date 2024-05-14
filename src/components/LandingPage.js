// LandingPage.js
import React from 'react';
import Navigation from './Navigation';

function LandingPage({ user }) {

  const handleClick = () => {
    console.log('Button clicked');
  }
  return (
    <div>
      <Navigation />
      <h2>Welcome, {user}!</h2>
      <p>This is your landing page.</p>
      
      <>

        {/* Achievement Component */}
        <h2>My Achievements</h2>

        {/*Awards Component*/}
        <h2>Awards</h2>

        {/*Weekly Challenges Component*/}
        <h2>Weekly Challenges</h2>


        <p>Another paragraph</p>
        <form>
          <input type="text" placeholder="Enter something" />
          <button onClick={handleClick}>Submit</button>
        </form>

        

        
      </>
    </div>
  );
}

export default LandingPage;
