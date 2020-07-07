import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working</p>
        <Person name = "Marcos" age = "20"/>
        <Person name = "Yamillete" age = "21">My hobbies: I love listening to music</Person>
        <Person name = "Mariama" age = "19"/>
      </div>
    );
  }
}

export default App;
