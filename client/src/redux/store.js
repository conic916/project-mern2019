// middleware => devtoolsy, rootreducery
// createstore => do tworzenia store 
// combinereducers => tworzenie subreducerow dla root reducera
import { createStore, combineReducers, applyMiddleware } from 'redux';
// import redux thunk 
import thunk from 'redux-thunk';
// import reducers
import posts from './postsRedux';


// combine reducers
const rootReducer = combineReducers({
    posts,
  });

// create store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;