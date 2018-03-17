import React, { Component } from 'react';

export default class Star extends Component {

  constructor(){
    super();
    this.state = {
      showInfo: false
    }
  }

  handleClick = (status) =>{
    return()=>{
      this.setState({showInfo: status})
    }
  }

  render(){
    let { planet, size} = this.props;
    size = size || 0;
    let fontSize = 15+25*size;
    return(
      <div className="alert alert-primary" role="alert" style={{cursor: 'pointer'}} onClick={this.handleClick(!this.state.showInfo)}>
        <span style={{fontSize: fontSize}}>{planet.name}</span>
        {this.state.showInfo && <div className="alert alert-light" style={{marginTop: '1rem'}} role="alert">
          <span>Climate: {planet.climate}</span><br/>
          <span>Gravity: {planet.gravity}</span><br/>
          <span>Diameter: {planet.diameter}</span><br/>
          <span>Population: {planet.population}</span>
        </div>}
      </div>
    )
  }
}
