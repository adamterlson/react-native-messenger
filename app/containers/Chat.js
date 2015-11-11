let React = require('react-native');
let {
  View,
  Text
} = React;
let { bindActionCreators } = require('redux');
let { connect } = require('react-redux/native');
let { styles } = require('../styles');

let ChatActions = require('../actions/chat');

let Log = require('../components/Log');
let AuthorEntry = require('../components/AuthorEntry');
let MessageEntry = require('../components/MessageEntry');

class Chat extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      author: null
    };
  }

  componentWillMount() {
    this.props.getMessages();
  }

  _onAuthorSubmit(author) {
    this.setState({ author });
  }

  _onMessageSubmit(text) {
    if (!this.state.author || !text) return;
  
    this.props.createMessage(this.state.author, text);
  }

  render() {
    let screen;

    if (!this.state.author) {
      screen = (<AuthorEntry onSubmit={(author) => this._onAuthorSubmit(author)}/>);
    } else {
      screen = (
        <View style={{flex:1}}>
          <View style={styles.authorName}>
            <Text style={styles.authorNameText}>{this.state.author}</Text>
          </View>
          <Log messages={this.props.messages} />
          <MessageEntry onSubmit={(message) => this._onMessageSubmit(message)} />
        </View>
      );
    }

    return (
      <View style={styles.page}>
        {screen}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.chat
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ChatActions, dispatch);
}

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);