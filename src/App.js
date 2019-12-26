import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <>
    <h1>Hat Page</h1>
  </>
)

function App() {
  return (
    <>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />
    </Switch>
    </>
  );
}

export default App;
