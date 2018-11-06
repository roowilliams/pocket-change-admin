import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { LandingPage, HomePage, SignupPage, AddCasePage } from 'containers'

export const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/signin" />
    }
  />
)

export default function RouteStack() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/signup" component={SignupPage} />
        <ProtectedRoute exact path="/home" component={HomePage} />
        <ProtectedRoute exact path="/case/add" component={AddCasePage} />
        {/* <ProtectedRoute exact path="/case/:id" component={ViewCasePage} /> */}
      </Switch>
    </Router>
  )
}
