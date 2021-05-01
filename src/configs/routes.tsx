import React from "react";
import {
  RouteProps,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Paths } from "../enums/all-path";

export type CustomRoutes = RouteProps & { name: string };

export const routes: CustomRoutes[] = [
  {
    name: "MainPage",
    path: Paths.ROOT,
    exact: true,
    component: React.lazy(() => import("../pages")), // code splitting use with suspense
  },
];

const AllRoutes: React.FC = () => (
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
);

export default AllRoutes;
