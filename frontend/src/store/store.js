import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducers/root_reducer';

const configureStore = (preloadState = {}) => (
  createStore(
    RootReducer,
    preloadState,
    applyMiddleware(thunk)
  )
);

export default configureStore;