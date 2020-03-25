import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from "./App";
import Root from "./root";

import { BrowserRouter as Router } from "react-router-dom";
import { unregister as registerServiceWorker } from "./serviceWorker";


ReactDOM.render(
  <Root>
    <Router>
      <App />
    </Router>
  </Root>,
  document.getElementById("root")
);
registerServiceWorker();
