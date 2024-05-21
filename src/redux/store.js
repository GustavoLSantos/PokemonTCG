import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import pokemonReducer from './pokemonReducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;