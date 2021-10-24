import './App.css';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import MainPage from "./pages"; ///< index.jsx will be automatically imported 
import UsersPage from "./pages/users";
import LoginPage from "./pages/login";
import HomePage from "./pages/home";
import CalendarPage from './pages/calendar';
import Pie from './pages/pie';
import Friends from './pages/friends';

//import firebase from "../node_modules/firebase/app";
// import firebase from "firebase";

// firebase.initializeApp(); d

class App extends React.Component {
  constructor(props){
    super(props);
    //this.state = { loginForm: new LoginForm() };
  }
  handleChange = ({target}) => {
    this.setState({ [target.name]: target.value });
  };
  render(){
    return (
      <div>
      <Router>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/calendar" component={CalendarPage} />
        <Route exact path="/pie" component={Pie} />
        <Route exact path="/friends" component={Friends} />
      </Router>
      </div>
    );
  }
}


export default App;
