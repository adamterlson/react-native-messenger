let React = require('react-native');
let {
  View,
  Text,
  TextInput,
  TouchableHighlight
} = React;
let { style, colors } = require('../styles');

class AuthorEntry extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View>
        <Text>What is your name?</Text>
        <TextInput
          style={[...style('textInput').style, { color: 'red' }]}
          onChangeText={(text) => this.setState({ text })}
          />
        <TouchableHighlight
          onPress={() => this.props.onSubmit(this.state.text)}
          underlayColor={colors.primaryHighlight}
          {...style('button')}>
          <Text {...style('buttonLabel')}>Let's go!</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

AuthorEntry.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};

module.exports = AuthorEntry;