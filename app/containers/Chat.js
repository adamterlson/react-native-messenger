import React, {
  View,
  Text
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import { style } from '../styles';

const ChatActions = require('../actions/chat');
const UserActions = require('../actions/user');

let Log = require('../components/Log');
let AuthorEntry = require('../components/AuthorEntry');
let MessageEntry = require('../components/MessageEntry');

class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  _onAuthorSubmit(name) {
    this.props.userActions.createUser({name});
  }

  _onMessageSubmit(text) {
    if (!this.props.author || !text) return;
  
    this.props.chatActions.createMessage(this.props.author, text);
  }

  render() {
    let screen;

    if (!this.props.author.name) {
      screen = (<AuthorEntry onSubmit={(author) => this._onAuthorSubmit(author)}/>);
    } else {
      screen = (
        <View style={{flex:1}}>
          <View {...style('authorName')}>
            <Text {...style('authorNameText')}>{this.props.author}</Text>
          </View>
          <Log messages={this.props.messages} />
          <MessageEntry onSubmit={(message) => this._onMessageSubmit(message)} />
        </View>
      );
    }

    return (
      <View {...style('page')}>
        {screen}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.chat,
    author: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chatActions: bindActionCreators(ChatActions, dispatch),
    userActions: bindActionCreators(UserActions, dispatch)
  };
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);