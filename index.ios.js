/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,View
} = React;
let Chat = require('./app/containers/Chat');
let { Provider } = require('react-redux/native');
let { styles } = require('./app/styles');

let configureStore = require('./app/store/configureStore');
let store = configureStore();

var messenger = React.createClass({
  render: function() {
    return (
      <Provider store={store}>
        {() => <Chat />}
      </Provider>
    );
  }
});

AppRegistry.registerComponent('messenger', () => messenger);
