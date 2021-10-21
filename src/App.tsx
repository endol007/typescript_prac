import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import BoardWrite from './components/BoardWrite';
import Home from './components/Home';
import BoardDetail from './components/BoardDetail';
import { history } from './redux/index';

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
