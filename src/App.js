import React, { Component } from 'react';
import './App.css';
import Auxiliary from './components/common/Auxiliary';
import Header from './components/layout/Header';
import Muscles from './components/muscles/Muscles';

class App extends Component {
  render() {
    return (
      <Auxiliary>
        <Header />
        <div className="container">
          <Muscles />
        </div>
      </Auxiliary>
    );
  }
}

export default App;
