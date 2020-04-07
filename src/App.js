import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar.component';
import User from './components/users/user.component';
import Alert from './components/layout/alert.component';
import Home from './components/pages/home.component';
import About from './components/pages/about.component';
import NotFound from './components/pages/notFound';

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
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login'component={User} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
    </AlertState>
    </GithubState>
  );
}

export default App;
