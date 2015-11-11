let { createStore, applyMiddleware } = require('redux');
let thunk = require('redux-thunk');
let reducer = require('../reducers');

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

module.exports = function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
};