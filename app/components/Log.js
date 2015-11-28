let React = require('react-native');
let {
  View,
  Text,
  ScrollView,
} = React;
let { style } = require('../styles');

class Log extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.messages || !this.props.messages.length) {
      return this._renderEmptyMessage();
    }

    return (
      <ScrollView 
        automaticallyAdjustContentInsets={false}
        {...style('log')}
        scrollEventThrottle={200}>
        <View>
          {this.props.messages.map(this._renderMessage)}
        </View>
      </ScrollView>
    );
  }

  _renderEmptyMessage() {
    return (
      <View {...style('log')}>
        <Text>There are currently no messages.</Text>
      </View>
    );
  }

  _renderMessage(message) {
    return (
      <Text>{message.author} says {message.text}</Text>
    );
  }
}

Log.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.arrayOf(React.PropTypes.shape({
    author: React.PropTypes.string,
    text: React.PropTypes.string
  }))).isRequired
};

module.exports = Log;