import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import Users from './Users';
import * as serviceWorker from './serviceWorker';


const routes = (
    <Router>
      <Switch>
          <Route path="/" component={App} /> 
          <Route path="/users" component={Users} />         
      </Switch>
    </Router>
  )

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
