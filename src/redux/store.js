import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers';
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'

const enhancer = compose(
  applyMiddleware(thunk),
  persistState(null, {slicer: (paths)=>{
    return (state) =>{
      let subset = {
        user: {
          loggedIn: state.user.loggedIn
        }
      };
      return subset;
    }
  }
}),
)

const store = createStore(reducer, enhancer);

export default store;
