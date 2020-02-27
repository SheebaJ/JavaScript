import React from 'react';
import axios from 'axios';
 class Weather extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            weather:[]
        }
    }

      componentDidMount() {
       axios.get(`https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=3790fe9495e382ae05ec1677e2b221a5`)
       .then(res => { 
           console.log(res.data);
        var weather=res.data;
        this.setState({ weathers:weather })
      })
    }
    render() {
        return (
          <ul>
            { JSON.stringify(this.state.weathers)}
          </ul>
        )
      }
    }

 export default Weather;

//3790fe9495e382ae05ec1677e2b221a5