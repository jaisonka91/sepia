import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {

  constructor(){
    super();
    this.state = {
      logged: false
    }
  }

  componentDidMount(){
    if(window && window.localStorage.getItem('token')){
      this.setState({logged: true});
    }
  }

  handleLogOut = () =>{
    window.localStorage.removeItem('token');
    window.location = '/';
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
              <a onClick={this.handleLogOut}> Logout </a>
              <Link to={'search'}> Search </Link>
            </div>
          }
        </div>
      </div>
    )
  }
}
