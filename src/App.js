import React from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        
          Edit <code>react-src/src/App.js</code> a o reload.
        </p>

        <Link to="/users">
  Click Me!
</Link>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
