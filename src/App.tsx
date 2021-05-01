import React, { Suspense } from "react";
import { Spinner } from "@chakra-ui/react";
import Routes from "./configs/routes";

const App: React.FC = () => (
  <Suspense fallback={<Spinner size="lg" />}>
    <Routes />
  </Suspense>
);

export default App;
