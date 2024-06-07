// LandingPage.js
import React from 'react';
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
    </div>
  );
}

export default LandingPage;
