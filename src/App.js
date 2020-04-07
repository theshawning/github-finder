import React, {  Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar.component';
import Users from './components/users/users.component';
import User from './components/users/user.component';
import Search from './components/users/search.component';
import Alert from './components/layout/alert.component';
import About from './components/pages/about.component';

import GithubState from './context/github/githubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {

  return (
    <GithubState>
    <AlertState>
    <Router>
      <div className='App'>
        <Navbar title='Github Finder' icon='fab fa-github' />
        <div className="container">
          <Alert />
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <Fragment>
                  <Search />
                  <Users />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login'component={User} />
          </Switch>
        </div>
      </div>
    </Router>
    </AlertState>
    </GithubState>
  );
}

export default App;
