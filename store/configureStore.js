import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();

const enhancer = compose(
  applyMiddleware(logger, thunk)
);

export const store = createStore(rootReducer, enhancer);
