import react from 'react-native';
import store from './store';

window.navigator.userAgent = 'react-native';
import io from 'socket.io-client/socket.io';

const socket = io('192.168.2.35:3000', { jsonp: false });

socket.connect();

export default {
  action: (obj) => { 
    socket.emit(obj.type, obj);
    return obj;
  },
  emit: socket.emit.bind(socket),
  on: (evt, fn) => {
    socket.on(evt, (data = {}) => {
      store.dispatch(fn(data));
    });
  }
};