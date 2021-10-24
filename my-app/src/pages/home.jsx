/*index.jsx*/
import React from "react";
import { Link } from "react-router-dom";
import './main.css';
//Functional Component 
const HomePage = () => {
  return (
    <div>
      <div id="navbar">
        <div id="title">❉ MyCycle</div>
        <div id="navbar-items">
          <ul><Link to="/home" class="link">Home</Link></ul>
          <ul><Link to="/friends" class="link">Friends</Link></ul>
          <ul><Link to="/home" class="link">Log Out</Link></ul>
        </div>
      </div>
      <h3>Welcome to the Home Page</h3>
      <div id="link-container">
        <Link to="/home">Show Home</Link>
        <Link to="/users">Show List of Users</Link>
        <Link to="/calendar">Show Calendar</Link>
        <Link to="/pie">Show Pie</Link>
        <Link to="/">Show Login Page</Link>
        <Link to="/friends">Friends</Link>
      </div>
    </div>
  );
};

export default HomePage;