import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
render(){
  Person=[{name:"asha",roll:"1MS17MCA07"}]
  return(
    <div className="App">
      <ul>
        {Person.name}-{Person.roll}
      </ul>
    </div>
  )
}
}

export default App;
