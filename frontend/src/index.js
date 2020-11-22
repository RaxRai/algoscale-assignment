import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import LoginPage from './components/loginPage';
import Analytics from './components/analytics';

ReactDOM.render(

      <BrowserRouter>
        <Switch>
          <Route  path='/analytics' component={Analytics}/>
          <Route  path='/contact' component={App}/>
          <Route  path='/' component={LoginPage}/>
          <Redirect to='/' />
        </Switch>

      </BrowserRouter>
 ,
  document.getElementById('root')
);
