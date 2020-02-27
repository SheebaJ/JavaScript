import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Get_Quotes from './Get_Quotes.js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    
    <Router>
        <Link to="/">Home</Link><br/>
        <Link to="/quotes">Get Quotes</Link><br/>
        {/* <Link to="/quotes/:id">View Quote</Link><br/>  */}
    <Switch>
        <Route exact path="/"><Home/></Route>
      <Route path="/quotes"><Get_Quotes/></Route>
    </Switch>
    </Router>
  );
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      s:""
    };
  }
  handleClick() {
      // console.log('i am caled');
      axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res => {
        console.log(res.data);
          const persons = res.data;
          let x=JSON.stringify(persons);
     localStorage.setItem('posts',JSON.stringify(persons));
          var result = JSON.parse(x);
          var s = result.length;
          console.log(result.length);
          this.setState({s:s});
        })
    }

    render() {
      return (
        <div><br/>
          <label>Total Record</label>{this.state.s}<br/>
          <button onClick={this.handleClick}> Fetch Quotes</button>    
              </div>
      )
    }
  }
