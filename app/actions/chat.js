import socket from '../socket';

export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export function createMessage(author, text) {
  return socket.action({
    type: CREATE_MESSAGE,
    message: {
      author,
      text
    }
  });
};

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export function receiveMessage(message) {
  console.log('receiving message', message);
  return {
    type: RECEIVE_MESSAGE,
    message
  };
}

socket.on(RECEIVE_MESSAGE, receiveMessage);
