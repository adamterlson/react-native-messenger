import react from 'react-native';
import store from './store';

window.navigator.userAgent = 'react-native';
let io = require('socket.io-client/socket.io');

// Only works with chrome debugger enabled
const socket = io('localhost:3000', { jsonp: false });

socket.connect();

export default {
  action: (obj) => { 
    socket.emit(obj.type, obj);
    return obj;
  },
  emit: socket.emit.bind(socket),
  on: (evt, fn) => {
    socket.on(evt, (data = {}) => {
      if (fn) {
        store.dispatch(fn(data));
      } else {
        store.dispatch(Object.assign(data, { type: evt }));
      }
    });
  }
};