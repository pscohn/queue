import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer, { makeHydratable } from './reducers';
import { HYDRATE_STATE } from '../constants';

const logger = createLogger();

const enhancer = compose(
  applyMiddleware(logger, thunk)
);

const hydratableReducer = makeHydratable(rootReducer, HYDRATE_STATE);

export const store = createStore(hydratableReducer, enhancer);
