import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [userData, setUserData] = useState(null);
  
    useEffect(() => {
      // Fetch user data or perform any initialization logic here
      const storedEmail = localStorage.getItem('email');
      setUserData({ email: storedEmail });
    }, []);
  
    return (
      <div className="dashboard">
        <h2>Welcome to your Dashboard</h2>
        {userData && (
          <div>
            <p>Email: {userData.email}</p>
            {/* Additional user information */}
          </div>
        )}
        {/* Additional dashboard components and functionalities */}
      </div>
    );
  }

  export default Dashboard;