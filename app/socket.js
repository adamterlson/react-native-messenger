import react from 'react-native';
import store from './store';

window.navigator.userAgent = 'react-native';
let io = require('socket.io-client/socket.io');

const socket = io('192.168.1.103:3000');

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