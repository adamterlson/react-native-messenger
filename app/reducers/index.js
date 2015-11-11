let { combineReducers } = require('redux');
let chat = require('./chat');

module.exports = combineReducers({ chat });