import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Editor } from "./components/Editor";
import { AppHeader, Essays, Insights } from "./components";

function App() {
  return (
    <Router>
      <div>
        <AppHeader />
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/essays">
            <Essays />
          </Route>
          <Route path="/insights">
            <Insights />
          </Route>
          <Route path="/">
            <Editor />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
