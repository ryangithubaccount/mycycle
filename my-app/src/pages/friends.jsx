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
          <ul><Link to="/calendar" class="link">Home</Link></ul>
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
                <h2>Bean Chan</h2>
                <p>bio here -- hi! I’m Bean Chan and I like chocolate n cookies</p>
                <br /><br />
                <button class="btn">Edit Profile</button>
                <button class="btn">Settings</button>
              </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default FriendsPage;