import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../hoc/asyncComponent/asyncComponent';

const asynDashboardAnalytics = asyncComponent(() => {
    return import('../containers/Dashboard/DashboardAnalytics');
});

const asynDashboardEcommerce = asyncComponent(() => {
    return import('../containers/Dashboard/DashboardEcommerce');
});
  
class Routes extends Component {
  render() {
    return (
        <Switch>
            <Route path="/dashboard/analytics" component={asynDashboardAnalytics} />
            <Route path="/" exac component={asynDashboardEcommerce} />
        </Switch>
    )
  }
}

export default Routes;