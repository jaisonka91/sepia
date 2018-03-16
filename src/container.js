import React, { Component } from 'react';
import { Provider } from 'react-redux';

export default class App extends Component {
  render(){
    return(
      <Provider store={this.props.store}>
        <div>
          {this.props.routes}
        </div>
      </Provider>
    )
  }
}
