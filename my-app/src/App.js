import logo from './logo.svg';
import './App.css';
//import firebase from "../node_modules/firebase/app";
// import firebase from "firebase";


// firebase.initializeApp(); 




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to MyCycle!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Log In
        </a>
      </header>
    </div>
  );
}

export default App;
