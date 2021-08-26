import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import CreateTeam from '~/pages/CreateTeam';
import ManageTeam from '~/pages/ManageTeam';

import Dashboard from '~/pages/DashBoard';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/create-team" component={CreateTeam} />
      <Route path="/manage-team" component={ManageTeam} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/" component={() => <h1>404 - Page not found</h1>} />
    </Switch>
  );
}
