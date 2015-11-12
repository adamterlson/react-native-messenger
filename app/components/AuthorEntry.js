let React = require('react-native');
let {
  View,
  Text,
  TextInput,
  TouchableHighlight
} = React;
let { styles, colors } = require('../styles');

class AuthorEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>What's your name?</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({ text })}
          />
        <TouchableHighlight
          onPress={() => this.props.onSubmit(this.state.text)}
          underlayColor={colors.primaryHighlight}
          style={styles.button}>
          <Text style={styles.buttonLabel}>Let's go!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

AuthorEntry.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

module.exports = AuthorEntry;