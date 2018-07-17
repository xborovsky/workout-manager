import React, { Component } from 'react';
import './App.css';
import Auxiliary from './components/common/Auxiliary';
import Header from './components/layout/Header';
import Muscles from './components/muscles/Muscles';
import Exercises from './components/exercises/Exercises';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Auxiliary>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path='/' component={Muscles}/>{/* TODO mozna lepsi pouzit path /muscles */}
            <Route path='/exercises/:muscleId' component={Exercises}/>
          </Switch>
        </div>
      </Auxiliary>
    );
  }
}

export default App;
