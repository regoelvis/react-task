import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Login from './login/login';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h2>Login page</h2>
        <img className="App-logo" src={logo} alt="React logo" />
      </header> */}
      <Login />
    </div>
  );
}

export default App;
