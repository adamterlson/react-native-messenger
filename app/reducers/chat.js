let { RECEIEVE_MESSAGES, CREATE_MESSAGE } = require('../actions/chat');

module.exports = function chatReducer(state = [], action) {
  switch(action.type) {
    case CREATE_MESSAGE:
      return [...state, action.message];
    case RECEIEVE_MESSAGES:
      return action.messages;

    default:
      return state;
  }
};
