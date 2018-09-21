import { createStore, combineReducers } from 'redux';
import reducers from '../reducers/index';
import DevTools from '../DevTools';
import '../country.css';

const store = createStore(
  reducers,
  DevTools.instrument()
);

export default store;