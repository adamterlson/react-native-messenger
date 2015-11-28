import socket from '../socket';

export const CREATE_USER = 'CREATE_USER';

export function createUser(user) {
  return socket.action({
    type: CREATE_USER,
    user
  });
};

export const LOGIN_USER = 'LOGIN_USER';

export function loginUser(user) {
  return {
    type: LOGIN_USER,
    user
  };
};

socket.on(LOGIN_USER, loginUser);

