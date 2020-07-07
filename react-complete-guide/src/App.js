import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:'Marcos', age:20},
      {name:'Yamillete', age:21},
      {name:'Mariama', age:19}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) =>{
    this.setState(
      {
        persons:[
          {name: newName, age:20},
          {name:'Yamillete', age:21},
          {name:'Mariama', age:20}
        ]
      }
    )
  }

  nameChangeHandler = (event) =>{
    this.setState(
      {
        persons:[
          {name: 'Marcos', age:20},
          {name: event.target.value, age:21},
          {name:'Mariama', age:19}
        ]
      }
    )
  }


  render() {
    const style={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };
    
    return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={()=>this.switchNameHandler('Marcos Leon')}>Switch name </button>
        <Person 
          name ={this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
        <Person 
          name ={this.state.persons[1].name} 
          age = {this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Marcos Leon Reyes')}
          change={this.nameChangeHandler}>My hobbies: I love listening to music</Person>
        <Person 
          name ={this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
