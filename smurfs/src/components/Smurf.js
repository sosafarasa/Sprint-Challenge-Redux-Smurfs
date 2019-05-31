import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';

class Smurf extends Component {
    onDeleteSmurf = e => {
        console.dir(this.props);
        e.preventDefault();
        this.props.deleteSmurf(this.props.id);
    }
    render(){
        return (
            <div className= 'smurf-card'>
                <div>Name: {this.props.name}</div>
                <div>Age: {this.props.age} years old</div>
                <div>Height: {this.props.height} cm</div>
                <button onClick= {this.onDeleteSmurf}>Delete</button>
            </div>
        )
    }
}

export default connect(null, { deleteSmurf }) (Smurf);