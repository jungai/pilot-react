import React, { Suspense } from "react";
import { Spinner } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./configs/routes";

const App: React.FC = () => (
  <Suspense fallback={<Spinner size="lg" />}>
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.name}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  </Suspense>
);

export default App;
