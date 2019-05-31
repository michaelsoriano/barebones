import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import Home from './Home';
import Notfound from './Notfound';
import * as serviceWorker from './serviceWorker';

const routes = (
    <Router>
      <Switch>
          <Route exact path="/" component={Home} /> 
          <Route component={Notfound} />       
      </Switch>
    </Router>
  )

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
