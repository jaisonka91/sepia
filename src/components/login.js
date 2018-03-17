import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, authErrorClear } from '../redux/actions.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      authError: false
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({authError: nextProps.authError})
  }

  onChangeField = (value, field) => {
    switch (field) {
      case 'username':
        this.setState({ username: value});
        break;
      case 'password':
        this.setState({ password: value});
        break;
    }
    if(this.state.authError){
      this.props.authErrorClear();
    }
  };

  handleLogin = () => {
    const { username, password } = this.state;
    if (username == '' || password == '') {
      alert('Enter username and password');
    } else {
      this.props.login(username, password);
    }
  };

  render() {
    return (
      <div className="container">
        <div style={{ margin: 'auto', width: '50%'}}>
          <input
            placeholder="Username"
            className="form-control"
            value={this.state.username}
            onChange={e => {
              this.onChangeField(e.target.value, 'username');
            }}
            style={{margin: '10px 0'}}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={this.state.password}
            onChange={e => {
              this.onChangeField(e.target.value, 'password');
            }}
            style={{margin: '10px 0'}}
          />
          {this.state.authError && <span style={{color: '#c0392b'}}>username or password you entered is incorrect</span>}
          <button className="btn btn-primary" onClick={this.handleLogin} style={{float: 'right'}}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    authError: state.user.authError
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ login, authErrorClear }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
