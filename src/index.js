import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import reportWebVitals from './reportWebVitals';
import {Route, Router, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import {createBrowserHistory} from "history";


export const history = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
      {/*MVC*/}
      <Provider store={store}>
          {/*ROUTER*/}
          {/*/posts */}
          {/*/statistics */}
          {/*/statistics/1*/}
          <Router history={history}>
              <App />
          </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
