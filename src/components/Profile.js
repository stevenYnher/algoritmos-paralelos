import React, { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "http://nestjs-bff-env.eba-3p23djp6.us-east-2.elasticbeanstalk.com/bff/profile",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setProfile(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      <h2>Profile</h2>
      {profile ? (
        <div>
          <p>Username: {profile.username}</p>
          <p>UserId: {profile.userId}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
