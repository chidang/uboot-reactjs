import AsyncComponent from '../components/AsyncComponent';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { 
  dashboard as dashboardRoutes, 
  authentication as authRoutes, 
  chat as chatRoutes,
  calendar as calendarRoutes,
  ecommerces as ecommerceRoutes,
  pages as pageRoutes,
  uiKits as uiKitRoutes,
  forms as formRoutes,
  icons as iconRoutes,
  tables as tableRoutes,
  charts as chartRoutes,
  maps as mapRoutes
} from "./index";

import DashboardLayout from "../layout/Dashboard";
import AuthLayout from "../layout/Auth";

const AsyncDashboardEcommerce = AsyncComponent(() => import('../containers/Dashboard/Ecommerce'));
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
        {appRoutes(AuthLayout, authRoutes)}
        {appRoutes(DashboardLayout, dashboardRoutes)}
        {appRoutes(DashboardLayout, calendarRoutes)}
        {appRoutes(DashboardLayout, chatRoutes)}
        {appRoutes(DashboardLayout, ecommerceRoutes)}
        {appRoutes(DashboardLayout, pageRoutes)}
        {appRoutes(DashboardLayout, uiKitRoutes)}
        {appRoutes(DashboardLayout, formRoutes)}
        {appRoutes(DashboardLayout, iconRoutes)}
        {appRoutes(DashboardLayout, tableRoutes)}
        {appRoutes(DashboardLayout, chartRoutes)}
        {appRoutes(DashboardLayout, mapRoutes)}
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
