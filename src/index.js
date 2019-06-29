import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import './index.css';
import Archive from './templates/Archive';
import Single from './templates/Single';
import Notfound from './templates/Notfound';

const routes = (   
      <Router>
        <Switch>               
            <Route exact path="/" component={Archive} />          
            <Route path="/page/:slug" component={Single} />    
            <Route path="/post/:slug" component={Single} /> 
            <Route path="/search/:term" component={Archive} />                               
            <Redirect exact from='/post/' to='/' /> 
            <Redirect exact from='/page/' to='/' />
            <Redirect exact from='/search/' to='/' />        
            <Route component={Notfound} /> 
        </Switch>
      </Router> 
  )

ReactDOM.render(routes, document.getElementById('root'));