import React, { useState } from 'react';
import BoardWrite from './components/BoardWrite';
import Home from "./components/Home";
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import BoardDetail from './components/BoardDetail';

function App() {

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/board" component={BoardWrite}/>
      <Route exact path="/detail" component={BoardDetail}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;