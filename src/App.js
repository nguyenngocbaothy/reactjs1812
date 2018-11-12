import React, { Component } from 'react';
// import { Sample } from './components/screens/Sample';
// import { Word } from './components/shared/Word';
import { ListWord } from './components/screens/ListWord';
// import { StateExam } from './components/screens/StateExam';
// import { MyInput } from './components/screens/MyInput';

import { Provider } from 'react-redux';
import { store } from './redux/store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ListWord />
      </Provider>
    );
  }  
}

export default App;
