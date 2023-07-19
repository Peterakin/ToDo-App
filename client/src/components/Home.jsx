import React from "react";
import LoginButton from "./Login";

const Home = () => {
  return (
    <div>
      <h1 style={{fontSize: '80px'}}>ToDo App</h1>
      <p style={{fontSize: '30px', margin: '20px'}}>Manage you Task and always be on Track</p>
      <img src="src/assets/images/istockphoto-1271863211-170667a.webp" alt="" /><br />
      <LoginButton />
    </div>
  );
};

export default Home;
