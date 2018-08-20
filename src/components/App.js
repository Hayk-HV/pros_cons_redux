import React, { Component } from 'react';
import '../style/App.css';

import Title from './title';
import Header from './header';
import NewApp from '../containers/pros_cons_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Header />
        <NewApp />
      </div>
    );
  }
}

export default App;
