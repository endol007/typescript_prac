import React from "react";
import BoardWrite from "./components/BoardWrite";
import Home from "./components/Home";
import { Route, BrowserRouter} from "react-router-dom";
import BoardDetail from "./components/BoardDetail";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./redux/index";

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