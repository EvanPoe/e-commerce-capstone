import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// generate middlewares and add them to the Store
// example of custom middleware (chained curry function)
// this is SYNCHRONOUS
// 1. the first middleware receives the store object
// 2. this returns another function that receives the next() method (the thing that allows us to pass on the action)
// 3. the next function this returns receives the action
// 4. finally inside we write our middleware signature
// log everything you have, pass the action along with next()...
// the only way to get the next state is from the store object (which will only return the new state if it's been updated and run through all of the reducers with the action)
// only when the reducers are finished with the action will the code that comes after "next(action)" fire
const loggerMiddleWare = (store) => (next) => (action) => {
    if(!action.type) {
        return next(action);
    }
    console.log('type', action.type);
    console.log('payload', action.payload);
    console.log('currentState', store.getState());

    next(action);
    console.log('next state: ', store.getState());
}


const middleWares = [loggerMiddleWare];
// const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);