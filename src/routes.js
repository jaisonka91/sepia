import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './components/header';
import Login from './components/login';
import Search from './components/search';

export default (
  <Router>
    <div>
      <Route path="/" component={Header} />
      <Route
        exact
        path="/"
        render={() => {
          if (window && window.localStorage.getItem('token')) {
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
          if (window && window.localStorage.getItem('token')) {
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
          if (window && window.localStorage.getItem('token')) {
            return <Search />;
          }
          return <Redirect push to="/login" />;
        }}
      />
    </div>
  </Router>
);
