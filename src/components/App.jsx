import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Quiz from './Quiz';
import Login from './Login';
import Home from './Home';
import GenericMessage from './GenericMessage';

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/login" key="/login" render={() => <Login />} />
          <Route exact path="/quiz" key="/quiz" render={() => <Quiz />} />
          <Route exact path="/" key="/" render={() => <Home />} />
          <Route path="*" render={() => <GenericMessage message="404" />} />
        </Switch>
      </div>
    </Router>
  );
}
