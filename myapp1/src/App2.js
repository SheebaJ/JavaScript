import React from 'react';
import axios from 'axios';

import './App.css';
class InputCompenet extends React.Component{
    constructor(props){
        super(props);
        this.state={
            fname:"",
            lname:""
        }
    }
handleName=(event)=>{
    var {name,value}=event.target;
    this.setState({[name]:value});
}
// handleSname=(event)=>{
//     var s=event.target.value
//     this.setState({lname:s});
// }
    render(){
        return(
            <div className="content">
                <p className="content1">{this.state.fname}<br/>
                {this.state.lname}</p>
                <p className="content1">
                Fname<input type="text" name="fname" onChange={this.handleName}/><br/>
                Lname<input type="text" name="lname" onChange={this.handleName}/></p>
            </div>
        )
    }
}
export default InputCompenet;
