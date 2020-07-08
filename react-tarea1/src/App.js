import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'renko1986'
  } 

  usernameChangeHandler=(event)=>{
    this.setState(
      {
        username: event.target.value
      }
    )
  }

  render() {
    return (
      <div className="App">
        <UserInput  cname={this.state.username} change={this.usernameChangeHandler}/>

        <UserOutput username={this.state.username}/>
        <UserOutput username="marcoslers"/>
        <UserOutput username="chiquistrikis"/>
      </div>
    );
  }
}

export default App;
