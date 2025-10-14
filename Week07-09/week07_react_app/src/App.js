import React from 'react';
import './App.css';
import logo from './logo.svg';
import Student from './student/Student';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />
        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>

        <Student id="101470541" name="Thinh Phan" />
      </header>
    </div>
  );
}

export default App;
