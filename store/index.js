import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import articles from './articles';


const reducer = combineReducers({
  articles
});



const store = createStore(reducer);

export default store;
