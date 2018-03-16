import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchData } from '../redux/actions.js';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      planet: '',
    };
  }

  handlePlanet = e => {
    this.setState({ planet: e.target.value }, () => {
      this.props.dispatch(searchData(this.state.planet));
    });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Planet"
          className="form-control"
          value={this.state.planet}
          onChange={this.handlePlanet}
        />
      </div>
    );
  }
}

export default connect()(Search);
