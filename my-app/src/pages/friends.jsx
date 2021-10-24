/*index.jsx*/
import React from "react";
import { Link } from "react-router-dom";
import './main.css';
import bean from '../images/bean.jpg';

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
      <div class="page">
      <div class="module-container">
          <div class="module" id="m1">pt 1</div>
          <div class="module" id="m2">
              <div id="m2-content">
                <img id="pfp" src={bean} alt="bean" />
                <h2>First Last</h2>
                <h5>status</h5>
                <p>bio</p>
                <button>Edit Profile</button>
                <button>Settings</button>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default FriendsPage;