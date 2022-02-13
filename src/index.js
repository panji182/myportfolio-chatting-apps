import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
// import Login from 'components/login/login';
import Chatpanel from 'components/chatpanel/chatpanel';
import reportWebVitals from './reportWebVitals';
const PUBLIC_URL = process.env.PUBLIC_URL;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <React.Fragment>
        <Route exact path={PUBLIC_URL + "/"} component={Chatpanel} />
        <Route path={PUBLIC_URL + "/leaf-chat"} component={App} />
      </React.Fragment>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
