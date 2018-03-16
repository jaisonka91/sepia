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
      <div>
        <span style={{fontSize: fontSize, cursor: 'pointer'}} onClick={this.handleClick(!this.state.showInfo)}>{planet.name}</span>
        {this.state.showInfo && <div className="container" style={{background: '#ecf0f1'}}>
          <h2>Name: {planet.name}</h2>
          <h3>Climate: {planet.climate}</h3>
          <h3>Gravity: {planet.gravity}</h3>
        </div>}
      </div>
    )
  }
}
