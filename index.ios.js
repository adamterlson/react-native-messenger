import React, {
  AppRegistry,
  View
} from 'react-native';

import { Provider } from 'react-redux/native';
import Chat from './app/containers/Chat';
import style from './app/styles';
import store from './app/store';

class messenger extends React.Component{
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        {() => <Chat />}
      </Provider>
    );
  }
}

AppRegistry.registerComponent('messenger', () => messenger);
