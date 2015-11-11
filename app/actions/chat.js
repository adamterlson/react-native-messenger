let server = 'http://192.168.1.35:3000';
let RECEIEVE_MESSAGES = 'RECEIEVE_MESSAGES';
let CREATE_MESSAGE = 'CREATE_MESSAGE';

function receiveMessages(messages) {
  return {
    type: RECEIEVE_MESSAGES,
    messages
  };
}

function createMessage(author, text) {
  return (dispatch) => {
    POST({ author, text }).then(() => {
      dispatch({
        type: CREATE_MESSAGE,
        message: {
          author,
          text
        }
      });
    });
  };
}

function getMessages() {
  return (dispatch) => {
    setInterval(() => {
      GET()
        .then((messages) => {
          dispatch(receiveMessages(messages));
        });
    }, 1000);
  };
}

function GET() {
  return fetch(server)
    .then((resp) => resp.json());
}

function POST(data) {
  return fetch(server, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

module.exports = {
  RECEIEVE_MESSAGES,
  CREATE_MESSAGE,
  getMessages,
  createMessage
};