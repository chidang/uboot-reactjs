import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { dashboard as dashboardRoutes, authentication as authRoutes } from "./index";
import DashboardLayout from "../hoc/Layout/Dashboard";
import AuthLayout from "../hoc/Layout/Auth"

const appRoutes = (Layout, routes) =>
  routes.map(({ children, path, component: Component }, index) =>
    children ? (
      children.map(({ path, component: Component }, index) => (
        <Route
          key={index}
          path={path}
          exact
          render={props => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      ))
    ) : (
      <Route
        key={index}
        path={path}
        exact
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    )
  );

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        {appRoutes(DashboardLayout, dashboardRoutes)}
        {appRoutes(AuthLayout, authRoutes)}
        
      </Switch>
    )
  }
}

export default Routes;