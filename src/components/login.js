import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../redux/actions.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  onChangeField = (value, field) => {
    switch (field) {
      case 'username':
        this.setState({ username: value });
        break;
      case 'password':
        this.setState({ password: value });
        break;
    }
  };

  handleLogin = () => {
    const { username, password } = this.state;
    if (username == '' || password == '') {
      alert('empty');
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
            style={{margin: 10}}
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            value={this.state.password}
            onChange={e => {
              this.onChangeField(e.target.value, 'password');
            }}
            style={{margin: 10}}
            
          />
          <button className="btn btn-primary" onClick={this.handleLogin} style={{float: 'right'}}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ login }, dispatch);
};

export default connect(null, mapDispatchToProps)(Login);
