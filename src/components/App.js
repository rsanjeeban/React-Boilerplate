import React, { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import {
  PublicRoute,
  PrivateRoute,
  MainLayout,
  LoginLayout,
} from 'components';

const AuthenticationPage = lazy(() =>
  import("./pages/AuthenticationPage"),
);
const DashboardPage = lazy(() => import("./pages/DashboardPage"));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <PrivateRoute
        exact
        path="/"
        layout={MainLayout}
        component={DashboardPage}
      />
      <PublicRoute
        exact
        path="/login"
        layout={LoginLayout}
        component={AuthenticationPage}
      />
    </Switch>
  </Suspense>
);

export default App;
