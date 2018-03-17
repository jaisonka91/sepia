import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../redux/actions.js';

class Header extends Component {

  constructor(props){
    super();
    this.state = {
      logged: props.loggedIn
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({logged: nextProps.loggedIn});
  }

  handleLogOut = () =>{
    this.props.logout();
  }

  render(){
    return(
      <div style={{height: 60, width: '100%', background: '#2f2f2ffa'}}>
        <div style={{padding: 18}}>
          {
            !this.state.logged &&
              <div>
                <Link to={'login'}> Login </Link>
              </div>
          }
          {
            this.state.logged &&
            <div>
              <Link to={'search'}> Search </Link>
              <a onClick={this.handleLogOut} style={{float: 'right', color: '#fff', cursor: 'pointer'}}> Logout </a>
            </div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {loggedIn: state.user.loggedIn}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logout }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
