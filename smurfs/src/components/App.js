import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

import AddSmurf from './AddSmurf';
import Smurf from './Smurf';


class App extends Component {

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.fetching){
      return <h2>LOADING SMURFS....</h2>
    } else {
      return (
        <div className='App'>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <AddSmurf />
          <div>{this.props.smurfs.map(smurf => {
            console.log({smurf})
            return (
              <Smurf
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                id={smurf.id}
                /> 
            )
          })}</div>
          
        </div>
      );
    }
    
  }
}

const mstp = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.fetching,
    error: state.error
  }
}
export default connect(mstp, { fetchData })(App);
