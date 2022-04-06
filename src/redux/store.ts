import { createStore, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import CombinedReducers from './reducers';


export const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const devTools = composeEnhancers()

const appliedMiddleware = devTools ? compose(applyMiddleware(thunk), devTools) : compose(applyMiddleware(thunk));

const store = createStore(CombinedReducers, appliedMiddleware);

export default store;

