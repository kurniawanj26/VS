import {createStore, applyMiddleware} from 'redux';
import appMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

export const store = createStore(rootReducer, applyMiddleware(appMiddleware));
