import React from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Loader from 'react-loader-spinner'


export default function BasicExample() {
  return (
    
    <Router>
        <li><Link to="/">Home</Link><br/></li>
        <li> <Link to="/users">Users</Link><br/></li>
        <li><Link to="/contact">Contact</Link><br/></li> 
        <li> <Link to="/about">About</Link><br/></li>
    <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/users"><Users/></Route>
        <Route path="/contact"><Contact/></Route>
        <Route path="/about"><About/></Route>
    </Switch>
    </Router>
  );
}

function Home() {
    return "Home";
  }
  function Contact() {
    return "Contact";
  }
  function About() {
    return "About";
  }
  class Users extends React.Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            setTimeout(() => {
          const persons = res.data;
          this.setState({ persons });
        },3000);
    })
    }
  
    render() {
      return (

        <ul>
            <Loader
    type="Puff"
    color="#00BFFF"
    height={50}
    width={50}
    timeout={3000} //3 secs

 />
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>
      )
    }
  }