import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/index';
import {
  BoardDetail, BoardWrite, Home,
} from './pages/BoardIndex';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Route exact path="/" component={Home}/>
      <Route exact path="/board" component={BoardWrite}/>
      <Route exact path="/detail" component={BoardDetail}/>
    </ConnectedRouter>
  );
}

export default App;
