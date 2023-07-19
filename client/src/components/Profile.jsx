import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div style={{display: "flex"}}>
        <img src={user.picture} alt={user.name}  style={{borderRadius: '99px', height: '60px', margin: "0px 20px 0px 20px"}}/>
        <h2 style={{height: '60px', marginTop:'15px'}}>{user.name}</h2>
      </div>
    )
  );
};

export default Profile;