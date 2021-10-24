/*index.jsx*/
import React from "react";
import { Link } from "react-router-dom";
import './main.css';
//Functional Component 
const FriendsPage = () => {
  return (
    <div id='friends-page'>
      <div id="navbar">
        <div id="title">❉ MyCycle</div>
        <div id="navbar-items">
          <ul><Link to="/home" class="link">Home</Link></ul>
          <ul><Link to="/friends" class="link">Friends</Link></ul>
          <ul><Link to="/home" class="link">Log Out</Link></ul>
        </div>
      </div>
      <h3>Welcome to the Friends Page</h3>

    </div>
  );
};

export default FriendsPage;