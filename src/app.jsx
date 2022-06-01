import Axios from 'axios';
import React, { Component } from 'react';
import TopSpot from './TopSpot';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }
  componentWillMount() {
    Axios
        .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
        .then(response => response.data)
        .then(topspots => this.setState({ topspots }));
  }
  render() {
    return (
      <div className='App'>
        <h1>San Diego Top Spots</h1>
        <h4>A list of the top 30 places to see in San Diego, California.</h4>
        <div>{
          this.state.topspots.map(topspot => (
            <div><TopSpot
              key={ topspot.id }
              name={ topspot.name }
              description={ topspot.description }
              location={ topspot.location }
            />
         
          </div>))
}</div>
      </div>
    );
  }
}
