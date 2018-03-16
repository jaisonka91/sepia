import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './components/header';
import Login from './components/login';
import Search from './components/search';
import { connect } from 'react-redux';

const RouteApp = (props) =>(
  <Router>
    <div>
      <Route path="/" component={Header} />
      <Route
        exact
        path="/"
        render={() => {
          const { loggedIn } = props;
          if (loggedIn) {
            if (window.location.pathname != '/search') {
              return <Redirect push to="/search" />;
            }
          }
          return <Login />;
        }}
      />
      <Route
        path="/login"
        render={() => {
          const { loggedIn } = props;
          if (loggedIn) {
            if (window.location.pathname != '/search') {
              return <Redirect push to="/search" />;
            }
          }
          return <Login />;
        }}
      />
      <Route
        path="/search"
        render={() => {
          const { loggedIn } = props;
          if (loggedIn) {
            return <Search />;
          }
          return <Redirect push to="/login" />;
        }}
      />
    </div>
  </Router>
);

const mapStateToProps = (state) =>{
  return {loggedIn: state.user.loggedIn}
}

export default connect(mapStateToProps)(RouteApp);
