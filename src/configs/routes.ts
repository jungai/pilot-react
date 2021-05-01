import React from "react";
import { RouteProps } from "react-router-dom";
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

export default routes;
