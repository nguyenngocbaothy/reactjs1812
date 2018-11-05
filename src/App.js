import React, { Component } from 'react';
// import { Sample } from './components/screens/Sample';
// import { Word } from './components/shared/Word';
import { ListWord } from './components/screens/ListWord';
// import { StateExam } from './components/screens/StateExam';
// import { MyInput } from './components/screens/MyInput';


class App extends Component {
  // render() {
  //   const word1 = { en: 'One', vn: 'Mot', isMemoried: true };
  //   const word2 = { en: 'Two', vn: 'Hai', isMemoried: false };
  //   const word3 = { en: 'Three', vn: 'Ba', isMemoried: true };
  //   return (
  //     <div className="App">
  //       <Word wordInfo={word1}/>
  //       <Word wordInfo={word2}/>
  //       <Word wordInfo={word3}/>
  //     </div>
  //   );
  // }

  render() {
    return (
      <ListWord />
    );
  }  
}

export default App;
