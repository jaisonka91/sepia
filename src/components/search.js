import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchData } from '../redux/actions.js';
import { bindActionCreators } from 'redux';
import WrapStars from './wrapStars';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      planet: [],
      totalPopulation: 0
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({planet: nextProps.planet, totalPopulation: nextProps.totalPopulation});
  }

  handlePlanet = e => {
    this.setState({ search: e.target.value }, () => {
      this.props.searchData(this.state.search);
    });
  };

  render() {
    const { planet, totalPopulation} = this.state;
    return (
      <div className="container">
        <div style={{width: '50%', margin: '20px auto'}}>
          <input
            placeholder="Search Planet"
            className="form-control"
            value={this.state.search}
            onChange={this.handlePlanet}
          />
        </div>
        <WrapStars planet={planet} total={totalPopulation}/>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    planet: state.search.planet,
    totalPopulation: state.search.totalPopulation
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ searchData }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
