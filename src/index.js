import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import './index.css';
import Home from './routes/Home';
// import Page from './routes/Page';
import Post from './routes/Post';
import Search from './routes/Search';
import Notfound from './routes/Notfound';

const routes = (   
      <Router>
        <Switch>               
            <Route exact path="/" component={Home} />          
            <Route path="/page/:slug" component={Post} />    
            <Route path="/post/:slug" component={Post} /> 
            <Redirect exact from='/post/' to='/' />            
            <Route path="/search/:term" component={Search} />
            <Route component={Notfound} />                         
        </Switch>
      </Router> 
  )

ReactDOM.render(routes, document.getElementById('root'));