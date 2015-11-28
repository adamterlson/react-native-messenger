let RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
let CREATE_MESSAGE = 'CREATE_MESSAGE';

export default function chatReducer(state = [], action) {
  switch(action.type) {
    case RECEIVE_MESSAGE:
    case CREATE_MESSAGE:
      return [...state, action.message];

    default:
      return state;
  }
};
