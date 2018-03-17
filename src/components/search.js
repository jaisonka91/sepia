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
      totalPopulation: 0,
      noData: false
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({planet: nextProps.planet, totalPopulation: nextProps.totalPopulation},()=>{
      if(this.state.planet.length == 0){
        this.setState({noData: true});
      }else{
        this.setState({noData: false});
      }
    });
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
          {this.state.noData && <div style={{textAlign: 'center'}}><span>No planet available!!!</span></div>}
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
