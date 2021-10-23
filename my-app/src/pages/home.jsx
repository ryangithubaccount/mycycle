/*index.jsx*/
import React from "react";
import { Link } from "react-router-dom";
//Functional Component 
const HomePage = () => {
  return (
    <div>
      <h3>Welcome to the Home Page</h3>
      <small>Main Page</small>
      <Link to="/users">Show List of Users</Link>
    </div>
  );
};

export default HomePage;