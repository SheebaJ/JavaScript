import React from 'react';
import axios from 'axios';
import Other from './App1.js'; 
import InputComponent from './App2.js'; 

import './App.css';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          name: 'react',
          //data: []
      }
  }


  handleOnChangeEvent = (event) => {
    console.log(event.target.value);

    var value = event.target.value;

    this.setState({ name: value });
}
  render(props) {
      console.log(this.props);

      let { data } = this.state;

      return (
          <div className="App">
              We are now using the class component!
              <h1>I'm {this.props.name}</h1>
      <Other/>
      <InputComponent/>


          </div>

      )
  }
}


export default App;
