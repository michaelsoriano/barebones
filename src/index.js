import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import Home from './routes/Home';
import Page from './routes/Page';
import Post from './routes/Post';
import Archive from './routes/Archive';
import Search from './routes/Search';
import Notfound from './routes/Notfound';

const routes = (   
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />          
            <Route path="/page/:slug" component={Page} />    
            <Route path="/post/:slug" component={Post} />  
            <Route path="/archive" component={Archive} />
            <Route path="/search/:term" component={Search} />
            <Route component={Notfound} />       
        </Switch>
      </Router> 
  )

ReactDOM.render(routes, document.getElementById('root'));