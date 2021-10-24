/*login.jsx*/
import React from "react";
import { Link } from "react-router-dom";
import './main.css';

//Functional Component 

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
            <Link to="/home">SIGN IN</Link>
            <Link to="/calendar">CALENDAR</Link>
        </React.Fragment>
        );
    }
}

const LoginPage = () => {
    return(
        <div>
        <div id="navbar">
        <div id="title">MyCycle</div>
        <div id="navbar-items">
          <ul><Link to="/home">Home</Link></ul>
          <ul><Link to="/home">Friends</Link></ul>
          <ul><Link to="/home">Log Out</Link></ul>
        </div>
      </div>
        <div className="LogIn">
        <header className="LogIn-header">
            <p>
            Welcome to MyCycle!
            </p>
            <div className="login-form">
                <LoginForm/>
            </div>
        </header>
        </div>
        </div>
    );
};

export default LoginPage;