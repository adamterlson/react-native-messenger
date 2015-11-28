let LOGIN_USER = 'LOGIN_USER';

export default function userReducer(state = {}, action) {
  switch(action.type) {
    case LOGIN_USER:
      return action.user;

    default:
      return state;
  }
};
