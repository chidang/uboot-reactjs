import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { dashboard as dashboardRoutes, authentication as authRoutes, AsyncDashboardEcommerce, AsyncDashboardAnalytics } from "./index";
import DashboardLayout from "../layout/Dashboard";
import AuthLayout from "../layout/Auth"

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
        <Route path="/" render={props => (
          <DashboardLayout>
            <AsyncDashboardEcommerce {...props} />
          </DashboardLayout>
        )} />
      </Switch>
    )
  }
}

export default Routes;