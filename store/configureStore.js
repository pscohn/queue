import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import createLogger from 'redux-logger';

const logger = createLogger();

const enhancer = compose(
  applyMiddleware(logger)
);

export const store = createStore(rootReducer, enhancer);
