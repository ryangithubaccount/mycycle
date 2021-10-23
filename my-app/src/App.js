import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
//import firebase from "../node_modules/firebase/app";
// import firebase from "firebase";

// firebase.initializeApp(); d
class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '' };
  }
  
  handleChange = ({target}) => {
    this.setState({ [target.name]: target.value });
  };
  
  render() {
    return (
      <React.Fragment>
        <form>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </form>
        <form>
          <label htmlFor="password">password</label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>
        <h3>Your username is: {this.state.username}</h3>
        <button>Sign In</button>
      </React.Fragment>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to MyCycle!
        </p>
        <div className="login-form">
          <LoginForm />
        </div>
      </header>
    </div>
  );
}


export default App;
