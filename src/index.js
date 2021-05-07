import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom';
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(

  <Router basename={process.env.PUBLIC_URL}>
    <App />  
  </Router>
  ,
  document.getElementById('root')
);