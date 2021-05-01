import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./pages";

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <MainPage />
      </Route>
    </Switch>
  </Router>
);

export default App;
