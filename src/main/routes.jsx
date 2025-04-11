import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import App from './app'
import Dashboard from '../Dashboard/dashboard.jsx'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/billingCycles' component={BillingCycle} />
      <Redirect from='*' to='/' />
    </Route>
  </Router>
)
