'use strict';

let React = require('react-native');
let {
  AppRegistry,View
} = React;
let Chat = require('./app/containers/Chat');
let { Provider } = require('react-redux/native');
let { styles } = require('./app/styles');

let configureStore = require('./app/store/configureStore');
let store = configureStore();

class messenger extends React.Component{
  render() {
    return (
      <Provider store={store}>
        {() => <Chat />}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('messenger', () => messenger);
