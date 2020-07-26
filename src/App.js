import React from 'react';
import logo from './Pug.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="loginBorder"> FLOOFSTER
        <img src={logo} alt="Logo" />
        <div className="newEmail">
          <div>name</div>
          <div>username/owner's name</div>
          <div>email</div>
          <div>handle google login</div>
        </div>
      <input type="button" className="join" value="Join" />
      </div>
    </div>
  );
}

export default App;
