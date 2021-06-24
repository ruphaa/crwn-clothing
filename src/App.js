import React from 'react';
import './App.css';
import HomePage from './pages/homepage.component'

import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>Hats Page</div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/hats" component={HatsPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
