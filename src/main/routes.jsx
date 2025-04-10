import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import App from './app'
import Dashboard from '../Dashboard/dashboard.jsx'
import BillingCycle from '../billingCycle/billingCycle'

function safeRedirect(to) {
  if (window.location.hash !== `#${to}`) {
    hashHistory.push(to)
  } else {
    hashHistory.replace(to)
  }
}

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/billingCycles' component={BillingCycle} />
    </Route>
    <Route path='*' onEnter={() => safeRedirect('/')} />
  </Router>
)
