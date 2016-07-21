import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer, { makeHydratable } from '../reducers/index';
import { HYDRATE_STATE } from '../constants/index';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

const logger = createLogger();

const enhancer = compose(
  applyMiddleware(logger, thunk)
);

const hydratableReducer = makeHydratable(rootReducer, HYDRATE_STATE);

export const store = createStore(hydratableReducer, enhancer);
