import { combineReducers } from 'redux';
import countriesReducer  from './countries-reducer';
import '../country.css';

const reducers = combineReducers({
    countriesReducer
});

export default reducers;