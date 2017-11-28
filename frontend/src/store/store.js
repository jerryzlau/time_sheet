import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_redicer';

const configureStore = (preloadState = {}) => (
  createStore(
    RootReducer,
    preloadState,
    applyMiddleware(thunk)
  )
);

export default configureStore;