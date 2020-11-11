import React from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import DashboardAnalytics from './containers/Dashboard/DashboardAnalytics';
import DashboardEcommerce from './containers/Dashboard/DashboardEcommerce';

const App = () => (
    <div>
      <Layout>
        <Switch>
          <Route path="/dashboard/analytics" component={DashboardAnalytics} />
          <Route path="/" exac component={DashboardEcommerce} />
        </Switch>
      </Layout>
    </div>
);

export default App;