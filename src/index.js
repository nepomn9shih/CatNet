import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter, HashRouter } from "react-router-dom";
import store from './redux/reduxStore'
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'

// ReactDOM.render(
//   <BrowserRouter basename={process.env.PUBLIC_URL}>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);