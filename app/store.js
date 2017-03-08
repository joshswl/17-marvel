import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Revue from 'revue';
import Vue from 'vue';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {  };

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;
