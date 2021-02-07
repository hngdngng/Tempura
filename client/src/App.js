import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import './App.css';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/#/" component={Main} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
